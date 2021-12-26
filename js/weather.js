const API_KeY = "6b2a61068c40972cabbd0437b4d4748d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KeY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `지역 : ${data.name}`;
      weather.innerText = `날씨 : ${data.weather[0].main} 온도 : ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
