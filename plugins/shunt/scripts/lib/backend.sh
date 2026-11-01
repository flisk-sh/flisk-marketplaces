#!/usr/bin/env bash
# Shared transport for bulk-read and code-write: one stateless call to a worker model.
#
#   shunt_ask SYSTEM_PROMPT   (the user prompt is read from stdin; the answer goes to stdout)
#
# Backend order (SHUNT_BACKEND=auto|ollama|haiku, default auto): a local Ollama model first, then `claude -p --model haiku`.
# Env: SHUNT_OLLAMA_HOST (http://localhost:11434), SHUNT_OLLAMA_MODEL (qwen2.5-coder:7b), SHUNT_HAIKU_MODEL (haiku),
#      SHUNT_OLLAMA_CTX (context window requested from Ollama; default: sized to the prompt, 4096 to 32768),
#      SHUNT_OLLAMA_PREDICT (2048, the most tokens the worker may write), SHUNT_TIMEOUT (120 seconds before falling back),
#      SHUNT_OLLAMA_MAX_CHARS (24000, bigger prompts skip Ollama in auto mode).

shunt_ollama() {
  local system="$1" prompt="$2" host="${SHUNT_OLLAMA_HOST:-http://localhost:11434}" body out ctx
  # A local 7B model needs minutes to read a big prompt on a laptop, so past this size auto mode goes straight to Haiku.
  if [ "${SHUNT_BACKEND:-auto}" = auto ] && [ "${#prompt}" -gt "${SHUNT_OLLAMA_MAX_CHARS:-24000}" ]; then
    echo "shunt: prompt is ${#prompt} characters, over SHUNT_OLLAMA_MAX_CHARS; skipping Ollama" >&2
    return 1
  fi
  command -v curl >/dev/null 2>&1 || return 1
  # A fixed 32k window makes the first token very slow on a laptop, so ask for about 3 characters per token plus room for the answer.
  ctx="${SHUNT_OLLAMA_CTX:-$(( (${#system} + ${#prompt}) / 3 + ${SHUNT_OLLAMA_PREDICT:-2048} + 512 ))}"
  [ "$ctx" -lt 4096 ] && ctx=4096
  [ "$ctx" -gt 32768 ] && ctx=32768
  body=$(jq -n --arg model "${SHUNT_OLLAMA_MODEL:-qwen2.5-coder:7b}" --arg system "$system" --arg prompt "$prompt" \
    --argjson ctx "$ctx" --argjson predict "${SHUNT_OLLAMA_PREDICT:-2048}" \
    '{model: $model, stream: false, options: {temperature: 0.2, num_ctx: $ctx, num_predict: $predict},
      messages: [{role: "system", content: $system}, {role: "user", content: $prompt}]}') || return 1
  out=$(curl -fsS --max-time "${SHUNT_TIMEOUT:-120}" -H 'Content-Type: application/json' -d "$body" "$host/api/chat" 2>&1) || {
    echo "shunt: Ollama failed after at most ${SHUNT_TIMEOUT:-120}s (${SHUNT_OLLAMA_MODEL:-qwen2.5-coder:7b}): ${out:-no response}" >&2
    return 1
  }
  out=$(printf '%s' "$out" | jq -r '.message.content // empty') || return 1
  [ -n "$out" ] || return 1
  printf '%s\n' "$out"
}

shunt_haiku() {
  local system="$1" prompt="$2"
  command -v claude >/dev/null 2>&1 || return 1
  # No tools and no session: the worker only answers. SHUNT_NESTED stops the hooks from firing inside it.
  printf '%s' "$prompt" | SHUNT_NESTED=1 claude -p --model "${SHUNT_HAIKU_MODEL:-haiku}" --tools "" \
    --no-session-persistence --system-prompt "$system"
}

shunt_ask() {
  local system="$1" prompt backend="${SHUNT_BACKEND:-auto}"
  prompt=$(cat)
  case "$backend" in
    ollama) shunt_ollama "$system" "$prompt" ;;
    haiku) shunt_haiku "$system" "$prompt" ;;
    auto)
      shunt_ollama "$system" "$prompt" && return 0
      echo "shunt: Ollama unavailable, falling back to Haiku" >&2
      shunt_haiku "$system" "$prompt"
      ;;
    *) echo "shunt: unknown SHUNT_BACKEND '$backend' (auto, ollama or haiku)" >&2; return 2 ;;
  esac
}
