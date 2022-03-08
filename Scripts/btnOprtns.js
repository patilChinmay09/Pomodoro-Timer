function pomodorBtn() {
    var tsk = document.getElementsByClassName("active-tsk");
    if (tsk.length > 0) {
        var task = JSON.parse(localStorage.getItem(tsk[0].getAttribute("id")));
        if (!document.getElementById("pmgr-btn").classList.contains("active")) {
            document.getElementById("pmgr-btn").classList.add("active");
            document.getElementById("shrt-btn").classList.remove("active");
            document.getElementById("lng-btn").classList.remove("active");
            document.getElementById("time").innerHTML = task["PomodoroLength"];
        }
        else {
            document.getElementById("time").innerHTML = task["PomodoroLength"];
        }
    }
    else {
        if (!document.getElementById("pmgr-btn").classList.contains("active")) {
            document.getElementById("pmgr-btn").classList.add("active");
            document.getElementById("shrt-btn").classList.remove("active");
            document.getElementById("lng-btn").classList.remove("active");
            document.getElementById("time").innerHTML = "25:00";
        }
        else {
            document.getElementById("stop").click();
            document.getElementById("time").innerHTML = "25:00";
        }
    }



}
function shortBtn() {
    var tsk = document.getElementsByClassName("active-tsk");

    if (tsk.length > 0) {
        var task = JSON.parse(localStorage.getItem(tsk[0].getAttribute("id")));
        if (!document.getElementById("shrt-btn").classList.contains("active")) {
            document.getElementById("shrt-btn").classList.add("active");
            document.getElementById("pmgr-btn").classList.remove("active");
            document.getElementById("lng-btn").classList.remove("active");
            document.getElementById("time").innerHTML = task["ShortBreak"];
        }
        else {
            document.getElementById("time").innerHTML = task["ShortBreak"];
        }
    }
    else {
        if (!document.getElementById("shrt-btn").classList.contains("active")) {
            document.getElementById("shrt-btn").classList.add("active");
            document.getElementById("pmgr-btn").classList.remove("active");
            document.getElementById("lng-btn").classList.remove("active");
            document.getElementById("time").innerHTML = "05:00";
        }
        else {
            document.getElementById("time").innerHTML = "05:00";
        }
    }

}
function longBtn() {
    var tsk = document.getElementsByClassName("active-tsk");
    if (tsk.length > 0) {

        var task = JSON.parse(localStorage.getItem(tsk[0].getAttribute("id")));
        if (!document.getElementById("lng-btn").classList.contains("active")) {
            document.getElementById("lng-btn").classList.add("active");
            document.getElementById("pmgr-btn").classList.remove("active");
            document.getElementById("shrt-btn").classList.remove("active");
            document.getElementById("time").innerHTML = task["LongBreak"];
        }
        else {
            document.getElementById("time").innerHTML = task["LongBreak"];
        }
    }
    else{
        if (!document.getElementById("lng-btn").classList.contains("active")) {
            document.getElementById("lng-btn").classList.add("active");
            document.getElementById("pmgr-btn").classList.remove("active");
            document.getElementById("shrt-btn").classList.remove("active");
            document.getElementById("time").innerHTML = "30:00";
        }
        else {
            document.getElementById("time").innerHTML = "30:00";
        }
    }

}