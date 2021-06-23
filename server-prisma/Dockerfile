FROM node:12.16.1-alpine
WORKDIR /usr/src/api
COPY package*.json yarn.lock ./
COPY . .
RUN chmod +x /usr/src/api/wait-for-it.sh
RUN sh wait-for-it.sh
RUN yarn install
RUN yarn migrate
RUN yarn build
CMD ["yarn", "start"]
