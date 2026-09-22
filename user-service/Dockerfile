FROM node:22-alpine

WORKDIR /app/user-service

COPY user-service/package*.json ./

RUN npm ci

COPY user-service/ ./

# Copy shared gRPC proto files
COPY proto/ /app/proto/

EXPOSE 3001
EXPOSE 50051

CMD ["npm", "start"]