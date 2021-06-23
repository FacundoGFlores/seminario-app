FROM node:12.16.1-alpine
WORKDIR /usr/src/api
COPY package*.json yarn.lock ./
COPY . .
RUN yarn install && yarn build
RUN yarn migrate
CMD [ "yarn", "start" ]
