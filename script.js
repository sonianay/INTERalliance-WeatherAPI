const key = "Enter your OWN API KEY :))";
const keyParam = "&appid=" + key;
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "&units=imperial";

// Send GET request to server and retrive relevant data
function getWeather() {
    const input = document.querySelector("input").value;
    const endpoint = url + input + keyParam + units;
    console.log(endpoint);
    fetch(endpoint).then((response) => {
        if (response.ok) {
            console.log("success");
            return response.json();
        }
    }).then((jsonResponse) => {
        formatJson(jsonResponse);
    });
}

// HTML elements in which the results will be displayed
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");

// Update the page with the retrieved data
function formatJson(jsonResponse) {
    description.innerHTML = `<p>Description: ${jsonResponse.weather[0].description.toUpperCase()}</p>`;
    temp.innerHTML = `<p>Temperature: ${jsonResponse.main.temp} F</p>`;
    pressure.innerHTML = `<p>Pressure: ${jsonResponse.main.pressure} hPa</p>`;
    humidity.innerHTML = `<p>Humidity: ${jsonResponse.main.humidity}%</p>`;
}
