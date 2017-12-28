"use strict";

const util = require('util');

function vueParser(vueFileText){

    const getTagType = (tag) => {
        let tagType = '';
        if(tag[0] != '<'){
            throw new Error('Provided "tag" is not a valid HTML tag');
        }
        else {
            for(let i = 1; i<tag.length; i++){
                if(tag[i] == ' ' || tag[i] == '>'){
                    break;
                }
                else {
                    tagType += tag[i]
                }
            }
        }
        return tagType;
    }

    const getHtmlBlock = function(tagType, html){
        let blockStart = null;
        let blockEnd = null;
        for(let i=0; i<html.length; i++){
            if(html[i] == '<'){
                let tag = '<';
                let ii = i;
                while(html[ii] != '>'){
                    ii++;
                    tag+= html[ii]
                }
                if(getTagType(tag) === tagType){
                    blockStart = i;
                }
                if(getTagType(tag) === '/' + tagType){
                    blockEnd = ii;
                    break;
                }
            }
        }
        if(blockStart == null || blockEnd == null){
            throw new Error(`Error parsing html block "${tagType}"`);
        }
        let block = ''
        let specialCharacters = ['\n', '\r', '\t'];
        for(let i=blockStart; i<=blockEnd; i++){
            if(specialCharacters.indexOf(html[i]) != -1){
                continue
            }
            block += html[i];
        }
        return block
    }
    return{
        template: getHtmlBlock('template', vueFileText),
        script: getHtmlBlock('script', vueFileText),
        style: getHtmlBlock('style', vueFileText)
    };
}

module.exports = vueParser;