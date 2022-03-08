function storeTask() {
    var title = document.getElementById("tskTitle").value;
    var totalPmdr = document.getElementById("totalPmdr").value;
    var pmdrLengthM = document.getElementById("pmdrLengthM").value;
    var pmdrLengthS = document.getElementById("pmdrLengthS").value;
    var pmdrLength = pmdrLengthM + ":" + pmdrLengthS;
    var shortM = document.getElementById("shortM").value;
    var shortS = document.getElementById("shortS").value;
    var short = shortM + ":" + shortS;
    var longM = document.getElementById("longM").value;
    var longS = document.getElementById("longS").value;
    var long = longM + ":" + longS;
    var interval = document.getElementById("interval").value;
    var alarmTone = document.getElementById("alarmTone").value;

    var task = {
        Title: title,
        TotalPomodoro: totalPmdr,
        PomodoroLength: pmdrLength,
        ShortBreak: short,
        LongBreak: long,
        Interval: interval,
        alarm: alarmTone
    };
    localStorage.setItem(title, JSON.stringify(task));
}
function displayTask() {
    var el = "";
    Object.keys(localStorage).forEach(key => {
        var task = JSON.parse(localStorage.getItem(key));
        var title = task["Title"];
        var totalPmdr = task["TotalPomodoro"];
        var pmdrLength = task["PomodoroLength"];
        var short = task["ShortBreak"];
        var long = task["LongBreak"];
        var interval = task["Interval"];
        var alarmTone = task["alarm"];

        if (!document.getElementById(title)) {
            var divSyn = "<div class='tsk-ttl '><h3 class='tsk-nm'>" + title + "</h3><i class='fa fa-info-circle tsk-sttn tsk-info' id='info-circle'onmouseout='hideInfo()'></i><i class='fa-solid fa-trash-can tsk-sttn ' id='tsk-dlt'></i></div>";

            document.getElementById("tsk-lst-cntnr").innerHTML = divSyn + document.getElementById("tsk-lst-cntnr").innerHTML;

            document.getElementById('info-circle').setAttribute("onmouseover", 'showInfo("' + key + '")');

            document.getElementsByClassName("tsk-ttl")[0].setAttribute("id", key);
            document.getElementById(key).setAttribute("onclick",'activeTask("'+key+'")')

            document.getElementById('tsk-dlt').setAttribute("onclick", 'deleteTask("' + key + '")');
        }


    });

}
function showInfo(infoEl) {
    var task = JSON.parse(localStorage.getItem(infoEl));
    var title = task["Title"];
    var totalPmdr = task["TotalPomodoro"];
    var pmdrLength = task["PomodoroLength"];
    var short = task["ShortBreak"];
    var long = task["LongBreak"];
    var interval = task["Interval"];
    var alarmTone = task["alarm"];
    document.getElementById("tsk01").innerHTML = title;
    document.getElementById("tsk02").innerHTML = totalPmdr;
    document.getElementById("tsk03").innerHTML = pmdrLength;
    document.getElementById("tsk04").innerHTML = short;
    document.getElementById("tsk05").innerHTML = long;
    document.getElementById("tsk06").innerHTML = interval;
    document.getElementById("tsk07").innerHTML = alarmTone;
    alert
    document.getElementById("task-info").style.visibility = "visible";
}
function hideInfo() {
    document.getElementById("task-info").style.visibility = "hidden";
}

function deleteTask(task) {
    document.getElementById(task).remove();
    localStorage.removeItem(task);
}
window.onload(displayTask());

function activeTask(task){
    var el = document.getElementsByClassName("tsk-ttl");
    for(var i =0;i<el.length;i++){
        el[i].classList.remove("active-tsk");
    }
    document.getElementById(task).classList.add("active-tsk");
    document.getElementById("pmgr-btn").click();
}