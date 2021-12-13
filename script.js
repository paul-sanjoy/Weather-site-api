let weather = {
    apiKey:  "5431b785c141db1430d715434e8cebce" ,
    fetchWeather: function (city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city + "&units=metric&appid=" + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
        document.querySelector(".city-name").innerText = name;
        document.querySelector(".weather-icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".status").innerText = description;
        document.querySelector(".temp-data").innerText = temp;
        document.querySelector(".hum-details").innerText = humidity;
        document.querySelector(".wind-speed").innerText = speed;
        document.querySelector(".card").classList.remove("loading");
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};



document.querySelector(".search-button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Kolkata");


showDate = function () {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const d = new Date();
    document.querySelector(".date").innerHTML = "today, " + d.getDate() + " " + monthNames[d.getMonth()];

}

showDate();