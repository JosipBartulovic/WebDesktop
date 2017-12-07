"use strict";

var util = require('util');

function vueParser(vueFileText){

    let getTagType = function(tag){
        let tagType = '';
        if(tag[0] != '<'){
            throw new Error('Provided "tag" is not a valid HTML tag');
        }else{
            for(let i = 1; i<tag.length; i++){
                if(tag[i] == ' ' || tag[i] == '>'){
                    break;
                }else{
                    tagType += tag[i]
                }
            }
        }
        return tagType;
    }

    let getHtmlBlock = function(tagType, html){
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
            throw new Error(util.format('Error parsing html block "<%s>"', tagType));
        }
        return html.slice(blockStart, blockEnd + 1);
    }
    return{
        template: getHtmlBlock('template', vueFileText),
        script: getHtmlBlock('script', vueFileText),
        style: getHtmlBlock('style', vueFileText)
    };
}

module.exports = vueParser;