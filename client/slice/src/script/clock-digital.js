function digitalClock() {
    var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes();
    document.getElementsByClassName('clock-digital__hour')[0].innerHTML = harold(hours) + ":" + harold(minutes);

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
    setInterval(function(){digitalClock()}, 1000);
}    

setInterval(digitalClock(), 1000);