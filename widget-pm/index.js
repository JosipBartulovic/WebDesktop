#!/usr/bin/env node
"use strict";

const vueParser = require('./components/vueParser');

const program = require('commander');
const fs = require('fs');
const auth = require('./components/authenticate');
const storage = require('./components/storage');
const pusher = require('./components/pusher');

program
    .command('push <name> <file>')
    .action((name, file) => {
        try {
            pusher.push(name, file);
        }
        catch (ex) {
            console.log(ex);
        }
    });

program
    .command('parse <file>')
    .action(file => {
        console.log({data: parser2(fs.readFileSync(file, 'utf-8'))});
    })

program
    .command('auth <mail> <password>')
    .action((mail, password) => {
        auth(mail, password);
    })

program
    .command('user')
    .action(() => {
        console.log(storage.getUser().mail);
    })

program.parse(process.argv)
