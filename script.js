const apiKey = "7287e9c21a303871be3bbe37523041eb"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "rainy") {
        weatherIcon.src = "./images/Rain1.png";
    }
    else if (data.weather[0].main == "clouds") {
        weatherIcon.src = "./images/clouds.png";
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "./images/clear.png";
    }
    else if (data.weather[0].main == "mist") {
        weatherIcon.src = "./images/mist.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})