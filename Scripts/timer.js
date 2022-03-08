var cntDwn = null, interval = 1000;
var count = 1;
var pomCount = 1;
let mins = 0, seconds = 0;
var prevMin = 0, prevSec = 0;

function startTimer() {
    var task = document.getElementsByClassName("active-tsk");
    var dwntime = document.getElementById("time").innerHTML;
    mins = parseInt(dwntime.substring(0, 2));
    seconds = parseInt(dwntime.substring(3));

    var duration = 60 * mins + seconds,
        display = document.querySelector('#time');
    var timer = duration, minutes, seconds;
    var pmdr = document.getElementById("pmgr-btn");
    var shrt = document.getElementById("shrt-btn");
    var lng = document.getElementById("lng-btn");
    if (cntDwn !== null) return;
    cntDwn = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (timer == 0 && pmdr.classList.contains("active") && count == 4) {
            lng.click();
            playNote();
        }
        else if (timer == 0 && pmdr.classList.contains("active") && count < 4) {
            shrt.click();
            playNote();
        }
        else if (timer == 0 && (shrt.classList.contains("active") || (lng.classList.contains("active")))) {
            pmdr.click();
            playNote();
            if (count == 4) {
                count = 0;
            }
            count++;
            pomCount++;
        }

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        
        if(task.length>0){
            var task1 = JSON.parse(localStorage.getItem(task[0].getAttribute("id")));
            if(pomCount == task1["TotalPomodoro"]){
                resetTimer();
                alert("Well Done!!!");
            }
        }
    }, interval);
}

function pauseTimer() {
    clearInterval(cntDwn);
    cntDwn = null;
}

function resetTimer() {
    var tsk = document.getElementsByClassName("active-tsk");
    clearInterval(cntDwn);
    cntDwn = null;
    var pmdr = document.getElementById("pmgr-btn");
    pmdr.click();
    count = 1;
    if(tsk.length>0){
        var task = JSON.parse(localStorage.getItem(tsk[0].getAttribute("id")));
        document.getElementById("time").innerHTML = task["PomodoroLength"];
    }
    else {
        var dwntime = document.getElementById("time").innerHTML = "25:00";
    }

}

function playNote() {
    var task = document.getElementsByClassName("active-tsk")[0].getAttribute("id");
    var task = JSON.parse(localStorage.getItem(task));
    var alarmTone = task["alarm"];
    var path = "../Audio/" + alarmTone + ".wav";
    var audio = new Audio(path);
    audio.play();
}