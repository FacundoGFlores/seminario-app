FROM node:12.16.1-alpine
WORKDIR /usr/src/api
COPY package*.json yarn.lock ./
COPY . .
RUN npx prisma migrate dev
RUN yarn install && yarn build
CMD [ "yarn", "start" ]
