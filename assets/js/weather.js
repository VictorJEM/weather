import { weather_data } from './data.js';

let loadDayForecastData = (ciudad_seleccionada) => {

    let item = -1;
    if(ciudad_seleccionada == "Guayaquil"){
        item = 0;
    }else if(ciudad_seleccionada == "Ambato"){
        item = 1;
    }else if(ciudad_seleccionada == "Tena"){
        item = 2;
    }

	//let [obj1] = weather_data;
    //let {city: city_w, date: date_w, maxtemperature: maxtemperature_w, mintemperature: mintemperature_w,
    //    cloudiness: cloudiness_w, wind: wind_w, rainfall: rainfall_w, forecast_today: forecast_today_w,} = obj1;

    let ciudad = document.getElementById("city");
    let fecha = document.getElementById("date");
    let tempMax = document.getElementById("maxtemperature");
    let tempMin = document.getElementById("mintemperature");
    let nubosidad = document.getElementById("cloudiness");
    let viento = document.getElementById("wind");
    let lluvia = document.getElementById("rainfall");
    //Late
    let iconoLate = document.getElementById("late_icon");
    let tempLate = document.getElementById("late_temperature");
    let foreLate = document.getElementById("late_forecast");
    let textLate = document.getElementById("late_text");
    //Night
    let iconoNight = document.getElementById("night_icon");
    let tempNight = document.getElementById("night_temperature");
    let foreNight = document.getElementById("night_forecast");
    let textNight = document.getElementById("night_text");

    ciudad.innerHTML = weather_data[item].city;
    fecha.innerHTML = weather_data[item].date;
    tempMax.innerHTML = weather_data[item].maxtemperature;
    tempMin.innerHTML = weather_data[item].mintemperature;
    nubosidad.innerHTML = weather_data[item].cloudiness;
    viento.innerHTML = weather_data[item].wind;
    lluvia.innerHTML = weather_data[item].rainfall;
    iconoLate.innerHTML = weather_data[item].forecast_today[0].icon;
    tempLate.innerHTML = weather_data[item].forecast_today[0].temperature;
    foreLate.innerHTML = weather_data[item].forecast_today[0].forecast;
    textLate.innerHTML = weather_data[item].forecast_today[0].text;
    iconoNight.innerHTML = weather_data[item].forecast_today[1].icon;
    tempNight.innerHTML = weather_data[item].forecast_today[1].temperature;
    foreNight.innerHTML = weather_data[item].forecast_today[1].forecast;
    textNight.innerHTML = weather_data[item].forecast_today[1].text;

    loadWeekForecastData("");

}

let loadWeekForecastData = (ciudad_prediccion) => {

    let item = -1;
    if(ciudad_prediccion == "Guayaquil"){
        item = 0;
    }else if(ciudad_prediccion == "Ambato"){
        item = 1;
    }else if(ciudad_prediccion == "Tena"){
        item = 2;
    }
	
    //let [obj,] = weather_data;

    if(item == -1){
        let lista = document.getElementsByClassName("list-group");
        let elemento = lista[0];
        elemento.innerHTML = ``;
    }else{
        let {forecast_week: forecast_week_w,} = weather_data[item];

        let plantilla = '';

        for(let num = 0 ; num < forecast_week_w.length ; num++){
            let plantilla2 = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                            <div class="d-flex flex-column">
                            <h6 class="mb-1 text-dark font-weight-bold text-sm">${forecast_week_w[num].text}</h6>
                            <span class="text-xs">${forecast_week_w[num].date}</span>
                            </div>
                            <div class="d-flex align-items-center ">
                            <span class="font-weight-bold text-dark mx-2">${forecast_week_w[num].temperature.max}</span> |  <span class="text-dark mx-2">${forecast_week_w[num].temperature.min}</span>
                            <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${forecast_week_w[num].icon}</i></div>
                            </div>
                        </li>`;
            plantilla = plantilla + plantilla2;
        }

        let lista = document.getElementsByClassName("list-group");
        let elemento = lista[0];
        elemento.innerHTML = plantilla;
    }
	
}

document.addEventListener('DOMContentLoaded', (event) => {

    let elementoSelect = document.getElementById("dropdownMenuButton");
    
    elementoSelect.addEventListener('change', (event) => {
        let selectedValue = event.target.value;
        loadDayForecastData(selectedValue);

        let elemento = document.getElementById("loadinfo");
        elemento.addEventListener('click', (event) =>{
            loadWeekForecastData(selectedValue);
        });

    });

    //loadDayForecastData();
    //let elemento = document.getElementById("loadinfo");
    //elemento.addEventListener('click', (event) =>{
    //    loadWeekForecastData();
    //});

});