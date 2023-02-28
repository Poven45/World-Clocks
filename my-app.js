const hourEL = document.getElementById("hour");

const minuteEl = document.getElementById ("minutes");

const secondEl = document.getElementById ("seconds");

const amEl = document.getElementById("am");



function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    if (h > 12){
        h = h- 12;
       am = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;


    hourEL.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s
    amEl.innerText = am;

    setTimeout(()=>{
updateClock()
    },1000);
}

updateClock();
