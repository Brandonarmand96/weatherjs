class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.desc = document.getElementById('desc');
        this.string = document.getElementById('string');
        this.details = document.getElementById('details');
        this.icon = document.getElementById('icon');
        this.humidity = document.getElementById('humidity');
        this.feelsLike = document.getElementById('feels-like');
        this.dewpoint = document.getElementById('dewpoint');
        this.wind = document.getElementById('wind');
    }

    paint(weather) {
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.feelslike_string}`;
        this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
        this.wind.textContent = `Wind: ${weather.wind_string}`;
    }
}