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
const btn = document.querySelector(".submit");
//   variables end

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const userZip = zipCode.value;
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=710540d456e691680abdfc45926ba1b8&units=imperial`;
  function fetchWeather() {
    //   inputs API URL
    fetch(url)
      .then((Response) => Response.json())
      .then((body) => {
        //local variables
        latitude = document.querySelector("#latitude");

        let keys = Object.keys(body.main);
        for (let i = 0; i < keys.length; i++) {
          //   let key = keys[i];
          // let value = body.main[key];
          console.log(body);
        }
        latitude.innerHTML = body.coord.lat;
      });
  }
  fetchWeather();
});
