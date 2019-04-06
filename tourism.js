let city = "Denver";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=77f723cc9f64af8673e89f7e850f6a97",
  function(data){
    console.log(data);
  
    let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let city = data.name;
    let tempFahrenheit = data.main.temp;
    let tempCelsius = ((data.main.temp) - 32) * 5 / 9;
    let description = data.weather[0].description;
  
    $('.weather-city').append(city);
    $('.weather-temperature-f').append(Math.floor(tempFahrenheit));
    $('.weather-temperature-c').append(Math.floor(tempCelsius));
    $('.weather-icon').attr('src', icon);
    $('.weather-description').append(description);
});
