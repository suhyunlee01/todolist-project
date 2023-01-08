const API_key = "60139c5d1a6b6ca893df941a4aa3b0b8";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords. longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ,`;
    });
}
function onGeoError(){
    alert("Sorry, I Can't Find You.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);