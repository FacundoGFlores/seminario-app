#!/usr/bin/env bash
echo "-> starting prisma migrations to postgres...\n"
cd /usr/src/api
./wait-for-it.sh db:5432 -- echo "db online\n"
yarn run migrate:save --name init_prod
yarn run migrate:up
sleep 5
yarn run build
yarn start
