FROM node:lts-alpine as BUILD
EXPOSE 8080
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx-os4.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=BUILD /usr/src/app/build .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]