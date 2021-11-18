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

fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=a42d1fa361f89de82770966377d69133"
).then(response => response.json())
.then(body => {
    console.log(body);
});
