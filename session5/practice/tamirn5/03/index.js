'use strict'
// Only change code below this line
let time;
let stop;

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    time = h + ":" + m + ":" + s + " " + session;
    document.querySelector("#clock").innerText = time;
    document.querySelector("#clock").textContent = time;

    //setTimeout(showTime, 1000);


}
showTime();
stop = setInterval(showTime, 1000)


document.querySelector(".btn").addEventListener("click", () => {


    function getTimeRemaining() {
        clearInterval(stop);
        var sta = "2021/08/16 0:40:00 ";
        var currentTime = new Date();
        var startDate = new Date(sta)

        var dif = startDate - currentTime;
        var s = 1000;
        var m = 1000 * 60;
        var h = 1000 * 60 * 60;
        var d = 1000 * 60 * 60 * 24;

        var days = Math.floor(dif / d);
        dif -= days * d;
        if (dif <= 0) dif = 0;

        var hours = Math.floor(dif / h);
        dif -= hours * h;
        if (dif <= 0) dif = 0;

        var minutes = Math.floor(dif / m);
        dif -= minutes * m;
        if (dif <= 0) dif = 0;

        var seconds = Math.floor(dif / s);
        document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;



    }
    getTimeRemaining();
    setInterval(getTimeRemaining, 1000)

})