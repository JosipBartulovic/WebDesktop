#!/usr/bin/env node
"use strict";

const vueParser = require('./components/vueParser');

const program = require('commander');
const fs = require('fs');
const auth = require('./components/authenticate');
const storage = require('./components/storage');
const pusher = require('./components/pusher');

program
    .command('push <file>')
    .action(file => {
        try {
            pusher.push('chma2r', file);
        }
        catch (ex) {
            console.log(ex);
        }
    });

program
    .command('parse <file>')
    .action(file => {
        const data = fs.readFileSync(file, 'utf-8');
        console.log({data: parser2(data)});
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
