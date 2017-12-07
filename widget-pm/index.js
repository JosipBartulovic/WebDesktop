#!/usr/bin/env node 
"use strict";

const vueParser = require('./components/vueParser');

var program = require('commander');
var fs = require('fs');


 program
  .command('install <file>')
  .action(function(file){
      fs.readFile(file, 'utf-8', function(err, data){
          fs.writeFile('test.txt', vueParser(data).template, function(err){
              console.log(err);
          });
        });
    });

program.parse(process.argv)
