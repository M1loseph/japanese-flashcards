FROM node:26.8.1-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.31.4-alpine-slim AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf.template /etc/nginx/templates/default.conf.template

ENV PORT=8080

CMD ["nginx", "-g", "daemon off;"]

