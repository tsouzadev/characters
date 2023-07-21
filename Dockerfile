FROM node:lts-alpine as BUILD
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17
COPY nginx-os4.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=BUILD /usr/src/app/build .
EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]