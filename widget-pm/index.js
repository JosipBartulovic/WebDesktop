#!/usr/bin/env node
"use strict";

const program = require('commander');
const fs = require('fs');
const init = require('./commands/init/command');
const push = require('./commands/push/command-push');
const publish = require('./commands/publish/command-publish');

program
    .command('init')
    .action(() => {
        init();
    })

program
    .command('push')
    .action(() => {
            push();
    });

program
    .command('publish')
    .action(() =>{
        publish();
    });

    /* program
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
        if(storage.getUser()){
            console.log(storage.getUser().mail);
        }else{
            console.log("To authenticante use widgetpm auth <mail> <password>");
        }
    }) */

program.parse(process.argv)
