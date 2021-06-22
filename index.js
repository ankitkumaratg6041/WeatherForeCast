let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((response) => {
      console.log(response);
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData);
  document.getElementById("city-name").innerHTML = weatherData.name;
  let date = new Date();
  document.getElementById('today-date').innerHTML = date.toDateString();
  document.getElementById('weather-type').innerHTML = weatherData.weather[0].main;
  document.getElementById('temp').innerHTML = Math.floor((weatherData.main.temp-32)*(5/9))+ '\u00B0';
  document.getElementById('min-temp').innerHTML = '/'+ ' '+Math.floor((weatherData.main.temp_min-32)*(5/9))+ '\u00B0';
  document.getElementById('max-temp').innerHTML = Math.floor((weatherData.main.temp_max-32)*(5/9))+ '\u00B0';
  document.getElementById('feel-like').innerHTML = Math.floor((weatherData.main.feels_like-32)*(5/9))+ '\u00B0';
};
