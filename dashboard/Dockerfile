# dashboard/Dockerfile
FROM node:22-alpine AS builder
WORKDIR /dashboard

COPY package*.json .         
RUN npm ci

COPY . .                     
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /dashboard/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
