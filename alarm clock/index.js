let audio=new Audio("download.mp3")
let setAlarmBtn = document.querySelector("#setAlarmBtn");
let setAlarmAt = document.querySelector("#setAlarmAt");

//for setting the time
setInterval(() => {
    if(new Date().getHours()<10){
        document.getElementsByClassName("hours")[0].innerHTML="0"+ new Date().getHours()
    }
    else{
        document.getElementsByClassName("hours")[0].innerHTML=new Date().getHours()
    }
    if(new Date().getMinutes()<10){
        document.getElementsByClassName("minutes")[0].innerHTML="0"+ new Date().getMinutes()
    }
    else{
        document.getElementsByClassName("minutes")[0].innerHTML=new Date().getMinutes()
    }
    if(new Date().getSeconds()<10){
        document.getElementsByClassName("seconds")[0].innerHTML="0"+ new Date().getSeconds()
    }
    else{
        document.getElementsByClassName("seconds")[0].innerHTML=new Date().getSeconds()
    }
    if (new Date().getHours() < 12) {
        document.getElementsByClassName("ampm")[0].innerHTML = "&nbspA.M.";
      }
    else {
        document.getElementsByClassName("ampm")[0].innerHTML = "&nbspP.M.";
      }

}, 1000);


// for alarm
function SetAlarm(){
    const inputElement = document.getElementById("setAlarmAt");
    const inputValue = inputElement.value;
    let seconds=parseInt(inputValue)
    setTimeout(() => {
        audio.play()
      }, (seconds * 1000))
}
