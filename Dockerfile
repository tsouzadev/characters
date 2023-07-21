FROM node:16.17.1-alpine3.16 AS build
WORKDIR /usr/app
COPY . /usr/app
RUN npm ci
RUN npm run build

FROM ubi8/nginx-120
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build usr/share/nginx/html
RUN mkdir -p /var/cache/nginx/client_temp/
RUN mkdir -p /var/cache/nginx/proxy_temp/
RUN mkdir -p /var/cache/nginx/fastcgi_temp/
RUN mkdir -p /var/cache/nginx/scgi_temp/
RUN mkdir -p /var/cache/nginx/uwsgi_temp/