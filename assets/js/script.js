var weatherContainer = document.getElementById('weathercont');
var fetchButton = document.getElementById('fetch-button');

var initialTempEl1 = document.getElementById('i-temp1')
var initialWindEl1 = document.getElementById('i-wind1')
var initialHumEl1 = document.getElementById('i-humidity1')
var initialFeelEl1 = document.getElementById('i-feel1')

var initialTempEl2 = document.getElementById('i-temp2')
var initialWindEl2 = document.getElementById('i-wind2')
var initialHumEl2 = document.getElementById('i-humidity2')
var initialFeelEl2 = document.getElementById('i-feel2')

var initialTempEl3 = document.getElementById('i-temp3')
var initialWindEl3 = document.getElementById('i-wind3')
var initialHumEl3 = document.getElementById('i-humidity3')
var initialFeelEl3 = document.getElementById('i-feel3')

var initialTempEl4 = document.getElementById('i-temp4')
var initialWindEl4 = document.getElementById('i-wind4')
var initialHumEl4 = document.getElementById('i-humidity4')
var initialFeelEl4 = document.getElementById('i-feel4')

var initialTempEl5 = document.getElementById('i-temp5')
var initialWindEl5 = document.getElementById('i-wind5')
var initialHumEl5 = document.getElementById('i-humidity5')
var initialFeelEl5 = document.getElementById('i-feel5')

var initialTempEl6 = document.getElementById('i-temp6')
var initialWindEl6 = document.getElementById('i-wind6')
var initialHumEl6 = document.getElementById('i-humidity6')
var initialFeelEl6 = document.getElementById('i-feel6')


function getApi() {
    var place = document.getElementById("area").value
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Toronto&appid=d33da539eba3b32d848bf55aa2815d00';
    var requestUrl1= 'https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=d33da539eba3b32d848bf55aa2815d00';

  fetch(requestUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data);

    initialTempEl1.innerHTML = "Temp: " + data.main.temp;
    initialWindEl1.innerHTML = "Wind: " + data.wind.speed;
    initialHumEl1.innerHTML = "Humidity: " + data.main.humidity;
    initialFeelEl1.innerHTML = "Feels Like: " + data.main.feels_like;


    });

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data.list);
        for(var i=0; i < data.list.length; i++){
                initialTempEl2.innerHTML = "Temp: " + data.list[0].main.temp;
                initialWindEl2.innerHTML = "Wind: " + data.list[0].wind.speed;
                initialHumEl2.innerHTML = "Humidity: " + data.list[0].main.humidity;

                initialTempEl3.innerHTML = "Temp: " + data.list[7].main.temp;
                initialWindEl3.innerHTML = "Wind: " + data.list[7].wind.speed;
                initialHumEl3.innerHTML = "Humidity: " + data.list[7].main.humidity;

                initialTempEl4.innerHTML = "Temp: " + data.list[15].main.temp;
                initialWindEl4.innerHTML = "Wind: " + data.list[15].wind.speed;
                initialHumEl4.innerHTML = "Humidity: " + data.list[15].main.humidity;

                initialTempEl5.innerHTML = "Temp: " + data.list[23].main.temp;
                initialWindEl5.innerHTML = "Wind: " + data.list[23].wind.speed;
                initialHumEl5.innerHTML = "Humidity: " + data.list[23].main.humidity;

                initialTempEl6.innerHTML = "Temp: " + data.list[31].main.temp;
                initialWindEl6.innerHTML = "Wind: " + data.list[31].wind.speed;
                initialHumEl6.innerHTML = "Humidity: " + data.list[31].main.humidity;
            
        }
    });
}
fetchButton.addEventListener('click', getApi);