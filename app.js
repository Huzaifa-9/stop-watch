// variables
var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var interval;
//  Elements GETs
var misec = document.getElementById("msec");
var second = document.getElementById("sec");
var minute = document.getElementById("min");
var Hour = document.getElementById("hour");
// DISABLED Button 
var d1 = document.getElementById("dis1");
var d2 = document.getElementById("dis2");
var d3 = document.getElementById("dis3");

// Function

function timer() {
    milisec++;
    misec.innerHTML = milisec;
    if (milisec >= 100) {  //( inteval after 10 *condition 100 )10*100 = 1000milisec = 1sec
        sec++;
        second.innerHTML = sec;
        milisec = 0;
    }
    else if (sec >= 60) {  //sec
        min++;
        minute.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60) {  //60mmin
        hour++;
        Hour.innerHTML = hour;
        min = 0;
    }
}
// START
function Start(){
    interval =setInterval(timer, 10);
    d1.disabled=true;
    d2.disabled=false;
}

// PAUSE
function Pause(){
    clearInterval(interval);
    d2.disabled=true;
    d1.disabled=false;
}

// RESET
function Reset(){
    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    misec.innerHTML  = "000"; 
    second.innerHTML = "00";
    minute.innerHTML = "00";
    Hour.innerHTML   = "00";
    Pause();
    d1.disabled=false;
    d2.disabled=false;
}


