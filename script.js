const apiKey = "422ec7ce75deef881d8c31800be4a456";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=tabriz";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();
