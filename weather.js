class Weather {
    constructor(city, state) {
        this.apiKey = '53d0615b392f5163dd51c5ba0a3dfc1e';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q={${this.city}},&appid={${this.apiKey}}`)

        const responseData = await response.json();

        return responseData.current_observation;
    }

    // Change weather locaton
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}