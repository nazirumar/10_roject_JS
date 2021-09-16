
const days_el = document.getElementById('days')
const hours_el = document.getElementById('hours')
const minutes_el = document.getElementById('mins')
const second_el = document.getElementById('seconds')





const newyear = "1 Jan 2022";


function countdown() {
    const newYearDate = new Date(newyear)
    const currentDate = new Date();
    
    const totalsecond = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalsecond / 3600 / 24);
    const hours = Math.floor(totalsecond / 3600) % 24;
    const minutes = Math.floor(totalsecond  / 60) %  60;
    const second = Math.floor(totalsecond) % 60;

    days_el.innerHTML=days;
    hours_el.innerHTML=format(hours);
    minutes_el.innerHTML=format(minutes);
    second_el.innerHTML= format(second);
}

function format(time) {
    return time < 10 ? (`0${time}`) : time
}

countdown()
setInterval(countdown, 1000)
