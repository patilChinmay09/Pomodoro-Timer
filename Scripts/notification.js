function playNote(){
    var task = document.getElementsByClassName("active-tsk")[0].getAttribute("id");
    var task = JSON.parse(localStorage.getItem(task));
    var alarmTone = task["alarm"];
    var path = "../Audio/"+alarmTone+".wav";
    var audio = new Audio(path);
    audio.play();
}