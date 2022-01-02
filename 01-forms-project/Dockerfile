FROM node:17

EXPOSE 3001

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY public/ ./public
COPY src/ ./src
COPY package.json ./

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install

CMD npm start

