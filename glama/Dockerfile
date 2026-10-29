# For Glama's automated checks of the Flisk MCP server (stdio).
# Paste this into the server's admin page on Glama. It does not need to live in the flisk repo.
FROM node:22-slim
RUN npm install -g @flisk-sh/flisk@latest && npm cache clean --force
ENTRYPOINT ["flisk", "mcp"]
