FROM node:12.19.0-alpine3.10
WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 5000
CMD ["npm", "start"]