FROM node:12.19.0

WORKDIR /usr/src/api
COPY package*.json ./
RUN yarn install
COPY . .

RUN apt-get update -y && apt-get upgrade -y && apt-get install git -y \
    && chmod +x /usr/src/api/wait-for-it.sh \
    && chmod +x /usr/src/api/run-it.sh

EXPOSE 3000

CMD [ "./run-it.sh" ]
