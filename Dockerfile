FROM node:26.3.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm install

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.31.1-alpine-slim AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf.template /etc/nginx/templates/default.conf.template

ENV PORT=8080

CMD ["nginx", "-g", "daemon off;"]

