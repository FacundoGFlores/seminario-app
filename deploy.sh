#!/bin/bash

ssh -oStrictHostKeyChecking=no -A connan@138.197.207.195 "cd seminario-app
    git checkout master
    git pull --rebase
    docker-compose up -d" -y
