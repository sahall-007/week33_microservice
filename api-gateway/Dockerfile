
FROM node:22-alpine

WORKDIR /app/api-gateway

COPY api-gateway/package*.json ./

RUN npm ci

COPY api-gateway/ ./

EXPOSE 3000

CMD ["npm", "start"]