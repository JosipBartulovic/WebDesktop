const markup = require('./store-markup');
const Template = require('../building_elements/template');
const desktop = require('../desktop/desktop-template');
const animate = require('../building_elements/animations');


function analogClock() {
    let date = new Date();
    let degreeMin = 6*date.getMinutes();
    let degreeHr = 0;
    if(date.getHours > 12) {
        degreeHr = 30* (date.getHours() - 12);
    }else{
        degreeHr = 30* (date.getHours());  
    }
    console.log(degreeHr);
    document.getElementsByClassName('minutes-container')[0].setAttribute('style', `transform: rotate(${degreeMin}deg);`);
    document.getElementsByClassName('hours-container')[0].setAttribute('style', `transform: rotate(${degreeHr}deg);`);
}

module.exports = new Template({markup: markup}, function() {
    console.log('store');
    analogClock();
});