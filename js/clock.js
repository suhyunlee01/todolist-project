const clock = document.querySelector("#clock");
const clockAMPM = document.querySelector(".ampm");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minites = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    if(hours>=12){
        clockAMPM.innerText = "PM"
    }else{
        clockAMPM.innerText = "AM"
    }
    
    clock.innerText = `${hours}:${minites}:${seconds}`;
}

getClock(); // 페이지가 로드 되자마자 getClock 함수를 한번 호출하고(1초 공백 없이 그냥 호출함.)
setInterval(getClock,1000); // 그 뒤에 setInterval을 통해 1초마다 getClock 함수를 호출해서 setInterval만 했을 때의 1초간의 공백을 없앰.
