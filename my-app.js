/* 
const hourEL = document.getElementById("hour");
const minuteEl = document.getElementById ("minutes");
const secondEl = document.getElementById ("seconds");
const amEl = document.getElementById("am");
*/

//for making the physical clock
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

let boolean_Var = false;

setInterval(setClock, 1000)

function checkButton(){
    boolean_Var = !boolean_Var;
    if(boolean_Var == true) {
        document.getElementById("military-time").value="12 Hr";
        
    } else if(boolean_Var == false){
        document.getElementById("military-time").value="24 Hr";
    }
    
}

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

function clock24() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let am = "AM";

    if(hour >= 12){
        am = "PM";
    }
    
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    if(boolean_Var == false){
        hour = hour > 12 ? /*if <--statement is true*/hour % 12 : /*if <--statement is false*/ hour;
    }
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#am").innerHTML = am;
}
/* 
function clock12() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let am = "AM";

    if(hour >= 12){
        am = "PM";
    }

    if(hour < 10){
        hour = "0" + hour;
    }
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    */

    

    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#am").innerHTML = am;


setClock();
let updateClock = setInterval(clock24, 1000);
