// creo oggetto con funzioni utili e variabili

let weater = {
    'apiKey' : 'b4d4caa8879d45b7531cf5544d77acda',
    fetchWeater : function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey + "&lang=it"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeater(data));
    },
        
    displayWeater: function(data) {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

    //    seleziono gli elementi nel dom e inserisco il testo dinamicamente
        document.querySelector('.city').innerText ='Meteo di' + ' ' + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.humidity').innerText ='Umidità: ' + humidity + '%';
        document.querySelector('.wind').innerText ='velocità del vento:' + speed + 'km/h';
    },

    search: function () {
        this.fetchWeater(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.search button').addEventListener('click', function () {
    weater.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        weater.search();
    }
});