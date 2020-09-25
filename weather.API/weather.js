const weatherApi = {

    key:"538690c3b37e872938c69482d5c31974",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}
const searchInputBox = document.getElementById('input-box');
// "eventlistner function on keypress"
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getweatherReport(searchInputBox.value)
    }
})
// get weather report
function getweatherReport(city){
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showweatherReport);
}
// show weather report
function showweatherReport(weather){
    console.log(weather)
    let city = document.getElementById("city");
    city.innerText = `${weather.name},${weather.sys.country}`
    let temp = document.getElementById("temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let minMaxTemp = document.getElementById("min-max");
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`
    let weathertype = document.getElementById("weather");
    weathertype.innerHTML = `${weather.weather[0].main}`;
    let air = document.getElementById("wind");
    air.innerHTML = `WSW ${weather.wind.speed}km/h`;
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = `${weather.main.humidity}%(humid)`
    let pressure = document.getElementById("pressure");
    pressure.innerHTML = `Air Pressure(${weather.main.pressure})mb`

    let date = document.getElementById("date");
    let real_date = new Date();
    date.innerText = datemanage(real_date)
}
// Date mange
function datemanage(actual_date){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let months = ['January','Febuary','March','April','May','June','Julay','August','Sepetember','October','November','December'] 
    let date = actual_date.getDate();
    let year = actual_date.getFullYear();;
    let day = days[actual_date.getDay()];
    let month = months[actual_date.getMonth()];
    return `${date} ${month} ${day} ${year}`
}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
