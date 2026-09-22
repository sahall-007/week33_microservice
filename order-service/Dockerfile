FROM node:22-alpine

WORKDIR /app/order-service

COPY order-service/package*.json ./

RUN npm ci

COPY order-service/ ./

COPY proto/ /app/proto/

EXPOSE 3002

CMD ["npm", "start"]