FROM apify/actor-node:20
USER root
RUN apk add --no-cache git zip && chown -R myuser:myuser /usr/src/app
USER myuser
COPY --chown=myuser package*.json ./
RUN npm install --omit=dev --omit=optional --no-audit --no-fund
COPY --chown=myuser . ./
CMD ["npm", "start", "--silent"]
