module.exports = {
    fade_out: (template, delay, after=null) => {  
        template.element.setAttribute(
            'style', 
            `
            transition: all ease-in ${delay}s;
            opacity: 0;
            `)
            if(after) setTimeout(after, delay*1000);
    }

}