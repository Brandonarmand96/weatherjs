//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI
const ui = new UI();

//Get weather on DOM loaded
document.addEventListener('DOMContentloaded', getWeather);



//CHange loacation event
document.getElementById('change-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //Change Location
    weather.changeLocation(city, state);

    // Set Location in LS
    storage.setLocationData(city, state);


    //get and display new weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide'); //Jquery codes
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint
        })
        .catch(err => console.log(err));
}