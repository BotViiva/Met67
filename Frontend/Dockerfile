FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install && npm audit fix || true
COPY . .
RUN npm run build

EXPOSE 80