// Windy API start----------->
const options = {
  key: "4Mlv48aMOySum6CgNwHz2ZlpYux6bW8Z",
  // Put additional Console output
  verbose: true,
  //Initial state of the map
  lat: 39.0,
  lon: -94.5,
  zoom: 5,
};
// Initialize Windy API
windyInit(options, (windyAPI) => {
  // windyAPI is ready, and contain 'map', 'store',
  // 'picker' and other usefull stuff

  const { map } = windyAPI;
  // .map is instance of Leaflet map
});

// Windy API End----------->

// variables start
const zipCode = document.querySelector("#zipCode");
const btn = document.querySelector(".button");
// variables end

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const userZip = zipCode.value;
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=710540d456e691680abdfc45926ba1b8&units=imperial`;
  removeHidden(); //shows paragraph information

  document.forms["form"].reset(); //resets form after input
  console.log(url);

  //fetch current weather for today
  function fetchWeather() {
    fetch(url) //inputs API URL
      .then((Response) => Response.json())
      .then((body) => {
        //local variables for fetchWeather start
        currentTemp = document.querySelector("#currentTemp");
        highTemp = document.querySelector("#highTemp");
        lowTemp = document.querySelector("#lowTemp");
        feelsLike = document.querySelector("#feelsLike");
        iconElement = document.querySelector(".weather-icon");
        //local variables for fetchWeather end

        let keys = Object.keys(body.main);
        for (let i = 0; i < keys.length; i++) {}

        weatherIconId = body.weather[0].icon;
        currentTemp.innerHTML = body.main.temp;
        highTemp.innerHTML = body.main.temp_max;
        lowTemp.innerHTML = body.main.temp_min;
        feelsLike.innerHTML = body.main.feels_like;
        longitude = body.coord.lon; // used for sevenDayURL
        latitude = body.coord.lat; // used for sevenDayURL

        //Seven Day forcast
        const sevenDayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=710540d456e691680abdfc45926ba1b8&units=imperial`;
        function fetchForcast() {
          fetch(sevenDayUrl)
            .then((Response) => Response.json())
            .then((body) => {
              console.log(body.daily);
              //local variable for fetchForcast start
              sevenDayForcast = document.querySelector("#sevenDayForcast");
              //local variable for fetchForcast end

              // sevenDayForcast.innerHTML = body.daily[0].temp.day;
              function displayWeather() {
                iconElement.innerHTML = `<img src="icons/${weatherIconId}.png"/>`;
              }
              displayWeather();
            });
        }
        fetchForcast();
      });
  }
  fetchWeather();
});

// shows paragraph information start
const removeHidden = () => {
  const para1 = document.getElementById("para1");
  const currentCard = document.getElementById("currentCard");
  para1.classList.remove("hidden");
  currentCard.classList.remove("hidden");
};
// shows paragraph information end

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let day = days[d.getDay()];
console.log(day);
