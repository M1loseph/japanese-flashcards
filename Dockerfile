FROM node:24.8.0-alpine AS build

WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.28.0-alpine-slim AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

