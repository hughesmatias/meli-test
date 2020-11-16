FROM node:12.19.0-alpine3.10 as build
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /var/www/localhost/htdocs/build
COPY default.conf /etc/nginx/conf.d/default.conf