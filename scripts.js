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

  //fetch current weather for today
  function fetchWeather() {
    fetch(url) //inputs API URL
      .then((Response) => Response.json())
      .then((body) => {
        //local variables for fetchWeather start
        iconElement = document.querySelector(".weather-icon");
        todayWeather = document.querySelector("#todayWeather");
        currentTemp = document.querySelector("#currentTemp");
        highTemp = document.querySelector("#highTemp");
        lowTemp = document.querySelector("#lowTemp");
        //local variables for fetchWeather end

        weatherIconId = body.weather[0].icon;
        longitude = body.coord.lon; // used for sevenDayURL
        latitude = body.coord.lat; // used for sevenDayURL

        //Seven Day forcast
        const sevenDayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=710540d456e691680abdfc45926ba1b8&units=imperial`;
        function fetchForcast() {
          fetch(sevenDayUrl)
            .then((Response) => Response.json())
            .then((body) => {
              console.log(body.daily);
              console.log(body.current);

              todayWeather.innerHTML =
                iconElement = `<img src="icons/${weatherIconId}.png"/>
                              </div>
                                Current: <span class="tempInput" id="currentTemp">${body.current.temp}</span> °F <br>
                                High: <span class="tempInput" id="highTemp">${body.daily[0].temp.max}</span> °F <br>
                                Low: <span class="tempInput" id="lowTemp">${body.daily[0].temp.min}</span> °F <br>
                              </div>`;

              // let otherDayForcast = "";
              // body.daily.forEach((day, idx) => {
              //   if (idx == 0) {

              //   } else {

              //     otherDayForcast +=
              //       iconElement = `<img src="icons/${weatherIconId}.png"/>
              //                 </div>
              //                   Current: <span class="tempInput" id="currentTemp">${body.current.temp}</span> °F <br>
              //                   High: <span class="tempInput" id="highTemp">${body.daily[0].temp.max}</span> °F <br>
              //                   Low: <span class="tempInput" id="lowTemp">${body.daily[0].temp.min}</span> °F <br>
              //                 </div>`;
              //   }
              // });
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
