const time = new Date().getHours();

const dark = document.getElementById("dark");

dark.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
})

if(time >= 19 || time < 6){
    document.body.classList.toggle("dark-mode")
}
const cityName = document.getElementById("city");
const button = document.getElementById("search");
const iconi = document.getElementById("iconi");
const apiKey = "2a7cc4216638ae7651319bcdc945d651";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function fetchWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

const name = document.getElementById("name");
const temp = document.getElementById("temp");
const hum = document.getElementById("hum");
const wind = document.getElementById("wind")
cityName.value = "";
if(!response.ok){
    alert("City not found, please enter a valid city name");
    name.innerHTML = "city not found";
    temp.innerHTML = "undefined";
    hum.innerHTML = "undefined";
    wind.innerHTML = "undefined";
    iconi.src = "image/cancel.png";
    return;
}

 
name.innerHTML = data.name;
temp.innerHTML = Math.round(data.main.temp)  + "°C";
hum.innerHTML = data.main.humidity + "%";
wind.innerHTML = data.wind.speed + "m/s";

if(data.weather[0].main === "Clouds"){
    iconi.src = "image/cloud.png";
}else if(data.weather[0].main === "Clear"){
    iconi.src = "image/sunny.png";
}else if(data.weather[0].main === "Rain"){
    iconi.src = "image/rain.png";
}else if(data.weather[0].main === "Drizzle"){
    iconi.src = "image/dari.png";
}else if(data.weather[0].main === "Thunderstorm"){
    iconi.src = "image/thunder.png";
}else if(data.weather[0].main === "Mist"){
    iconi.src = "image/mist.png";
}else if(data.weather[0].main === "Snow"){
    iconi.src = "image/snow.png";
}








}

button.addEventListener("click", () => {
    fetchWeather(cityName.value);
    if(cityName.value === ""){
    alert("please enter a city name");
}
})

