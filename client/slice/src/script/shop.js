console.log("UCITAN");


var calendar = document.getElementsByClassName('shop__container--third')[0];
var download_calendar = calendar.getElementsByClassName('shop__button')[0];
console.log(download_calendar);
download_calendar.addEventListener('click', function(){
    calendar.setAttribute('style', `
    transition: all ease-in-out .2s;
    opacity: 0;
    `)
    console.log("chmar")
    
});

var info_calendar = calendar.getElementsByClassName('shop__icon--first')[0];
info_calendar.addEventListener('mouseover', function(){
    var shade = calendar.getElementsByClassName('shop__item-shade')[0];
    shade.setAttribute('style', `
    transition: all ease-in 0.25s;
    opacity: 0.92;
    `)
});

info_calendar.addEventListener('mouseleave', function(){
    var shade = calendar.getElementsByClassName('shop__item-shade')[0];
    shade.setAttribute('style', `
    transition: all ease-in 0.25s;
    opacity: 0;
    `)
});