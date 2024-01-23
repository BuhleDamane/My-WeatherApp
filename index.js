function displayTemperature(response) {
    //console.log(response.data.temperature.current)
    let temperature = response.data.temperature.current;
    let temperatureElement = document.querySelector("#temperature");
   let cityElement = document.querySelector("#city");

   cityElement.innerHTML = response.data.city;
    //cityElement.innerHTML = searchInput.value;
    temperatureElement.innerHTML = Math.round(temperature);
  }
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    console.log(searchInput.value)
    
    searchCity(searchInput.value)
}
function searchCity(city) {
    //event.preventDefault();
    //let searchInputElement = document.querySelector("#search-input");
    //let cityElement = document.querySelector("#current-city");
    //let city = searchInputElement.value;
  
    let apiKey = "13d2ee51f9b4o75695t30ad14de90637";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    //cityElement.innerHTML = searchInputElement.value;
    axios.get(apiUrl).then(displayTemperature);
    //cityElement.innerHTML = city;
  }

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Thohoyandou")