const Template = require('../../building_elements/template');
const markup = require('./toolbar-markup');


function digitalClock() {
    var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes();
    document.getElementsByClassName('clock-digital__hour')[0].innerHTML = `${harold(time.getHours())}:${harold(time.getMinutes())}`;
    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}

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

module.exports = new Template(
    {markup: markup}, 
    function(){
        setInterval(digitalClock, 1000);
        analogClock();
        let deleteButton = this.element.getElementsByClassName('delete__button');
    });