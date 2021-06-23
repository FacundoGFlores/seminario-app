FROM node:12.16.1-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install && yarn build
CMD [ "yarn", "start" ]
