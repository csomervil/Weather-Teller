
            /* Varibale Declaration */
var fetchButton = document.getElementById('fetch-button');
var locationEl = document.getElementById('location');

var initialTempEl1 = document.getElementById('i-temp1')
var initialWindEl1 = document.getElementById('i-wind1')
var initialHumEl1 = document.getElementById('i-humidity1')
var initialIndexEl1 = document.getElementById('i-index1')
var initialIconEl1 = document.getElementById('i-icon1')

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
var initialIconEl4 = document.getElementById('i-icon4')

var initialTempEl5 = document.getElementById('i-temp5')
var initialWindEl5 = document.getElementById('i-wind5')
var initialHumEl5 = document.getElementById('i-humidity5')
var initialFeelEl5 = document.getElementById('i-feel5')
var initialIconEl5 = document.getElementById('i-icon5')

var initialTempEl6 = document.getElementById('i-temp6')
var initialWindEl6 = document.getElementById('i-wind6')
var initialHumEl6 = document.getElementById('i-humidity6')
var initialFeelEl6 = document.getElementById('i-feel6')
var initialIconEl6 = document.getElementById('i-icon6')

/* Retrieve information from API */
function getApi() {
    if (document.getElementById("area").value == "") {
        alert("Enter a Location")
        return false;
    }
    
    var place = document.getElementById("area").value
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + place + '&appid=d33da539eba3b32d848bf55aa2815d00';
    var requestUrl1= 'https://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=d33da539eba3b32d848bf55aa2815d00';
    

  fetch(requestUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    if (data.cod == '404') {
        alert("Location Does Not Exist")
        return false;
    }

    console.log(data);
    console.log(data.weather[0].icon)
    document.getElementById('i-icon1').src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    var placeName = data.name;
    var latitude = data.coord.lat;
    var longitude = data.coord.lon;
    var requestUrl2= 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude={part}&appid=d33da539eba3b32d848bf55aa2815d00';
    
    

    fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    uvindex = data.current.uvi;
    initialIndexEl1.classList.remove("low", "moderate", "high", "veryhigh", "extreme")
    if (uvindex <= 2){
        initialIndexEl1.classList.add("low");
    } else if (uvindex > 2 && uvindex <= 5) {
        initialIndexEl1.classList.add("moderate");

    } else if (uvindex > 5 && uvindex <= 7) {
        initialIndexEl1.classList.add("high");

    } else if (uvindex > 7 && uvindex <= 10) {
        initialIndexEl1.classList.add("veryhigh");

    } else {
        initialIndexEl1.classList.add("extreme");

    }
    
    currentTime = moment().tz(data.timezone).format("LTS")
    locationEl.innerHTML = placeName + ": " + currentTime;


    initialIndexEl1.innerHTML = data.current.uvi;

    });

    initialTempEl1.innerHTML = "Temp: " + data.main.temp + " K";
    initialWindEl1.innerHTML = "Wind: " + data.wind.speed + " mph";
    initialHumEl1.innerHTML = "Humidity: " + data.main.humidity  + " %";
    
    addBtn();


    });

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data.list);
        for(var i=0; i < data.list.length; i++){
    
                initialTempEl2.innerHTML = "Temp: " + data.list[0].main.temp + " K";
                initialWindEl2.innerHTML = "Wind: " + data.list[0].wind.speed + " mph";
                initialHumEl2.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";
                document.getElementById('i-icon2').src = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png';
                initialFeelEl2.innerHTML = data.list[0].weather[0].description;
    

                initialTempEl3.innerHTML = "Temp: " + data.list[7].main.temp + " K";
                initialWindEl3.innerHTML = "Wind: " + data.list[7].wind.speed + " mph";
                initialHumEl3.innerHTML = "Humidity: " + data.list[7].main.humidity + " %";
                document.getElementById('i-icon3').src = 'http://openweathermap.org/img/w/' + data.list[7].weather[0].icon + '.png';
                initialFeelEl3.innerHTML = data.list[7].weather[0].description;

                initialTempEl4.innerHTML = "Temp: " + data.list[15].main.temp + " K";
                initialWindEl4.innerHTML = "Wind: " + data.list[15].wind.speed + " mph";
                initialHumEl4.innerHTML = "Humidity: " + data.list[15].main.humidity + " %";
                document.getElementById('i-icon4').src = 'http://openweathermap.org/img/w/' + data.list[15].weather[0].icon + '.png';
                initialFeelEl4.innerHTML = data.list[15].weather[0].description;

                initialTempEl5.innerHTML = "Temp: " + data.list[23].main.temp + " K";
                initialWindEl5.innerHTML = "Wind: " + data.list[23].wind.speed + " mph";
                initialHumEl5.innerHTML = "Humidity: " + data.list[23].main.humidity;
                document.getElementById('i-icon5').src = 'http://openweathermap.org/img/w/' + data.list[23].weather[0].icon + '.png';
                initialFeelEl5.innerHTML = data.list[23].weather[0].description;

                initialTempEl6.innerHTML = "Temp: " + data.list[31].main.temp + " K";
                initialWindEl6.innerHTML = "Wind: " + data.list[31].wind.speed + " mph";
                initialHumEl6.innerHTML = "Humidity: " + data.list[31].main.humidity + " %";
                document.getElementById('i-icon6').src = 'http://openweathermap.org/img/w/' + data.list[31].weather[0].icon + '.png';
                initialFeelEl6.innerHTML = data.list[31].weather[0].description;
            
        }
    });
}

/* To Create History */
function addBtn () {
   
    var 

        txtVal = document.getElementById("area").value,
        buttonNode = document.getElementById('button');
        btnNode = document.createElement("button");
        console.log(txtVal)
        
        buttonNode.addEventListener("click",() => {
            
            getApibtn(txtVal)
            
        })

       
        txtNode = document.createTextNode(txtVal);


    if (txtVal === "") {
        alert("Username Required")
        return false;
    }
    
    btnNode.appendChild(txtNode);
    buttonNode.appendChild(btnNode);
    
    saveAll()

}

/* Specific Functionality for History Buttons */
function getApibtn(locant) {
    
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + locant + '&appid=d33da539eba3b32d848bf55aa2815d00';
    var requestUrl1= 'https://api.openweathermap.org/data/2.5/weather?q=' + locant + '&appid=d33da539eba3b32d848bf55aa2815d00';
    

  fetch(requestUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    if (data.cod == '404') {
        alert("Location Does Not Exist")
        return false;
    }

    document.getElementById('i-icon1').src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    var placeName = data.name;
    var latitude = data.coord.lat;
    var longitude = data.coord.lon;
    var requestUrl2= 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude={part}&appid=d33da539eba3b32d848bf55aa2815d00';
    
    

    fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    uvindex = data.current.uvi;
    initialIndexEl1.classList.remove("low", "moderate", "high", "veryhigh", "extreme")
    if (uvindex <= 2){
        initialIndexEl1.classList.add("low");
    } else if (uvindex > 2 && uvindex <= 5) {
        initialIndexEl1.classList.add("moderate");

    } else if (uvindex > 5 && uvindex <= 7) {
        initialIndexEl1.classList.add("high");

    } else if (uvindex > 7 && uvindex <= 10) {
        initialIndexEl1.classList.add("veryhigh");

    } else {
        initialIndexEl1.classList.add("extreme");

    }
    
    currentTime = moment().tz(data.timezone).format("LTS")
    locationEl.innerHTML = placeName + ": " + currentTime;


    initialIndexEl1.innerHTML = data.current.uvi;

    });

    initialTempEl1.innerHTML = "Temp: " + data.main.temp + " K";
    initialWindEl1.innerHTML = "Wind: " + data.wind.speed + " mph";
    initialHumEl1.innerHTML = "Humidity: " + data.main.humidity  + " %";


    });

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data.list);
        for(var i=0; i < data.list.length; i++){
    
                initialTempEl2.innerHTML = "Temp: " + data.list[0].main.temp + " K";
                initialWindEl2.innerHTML = "Wind: " + data.list[0].wind.speed + " mph";
                initialHumEl2.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";
                document.getElementById('i-icon2').src = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png';
                initialFeelEl2.innerHTML = data.list[0].weather[0].description;
    

                initialTempEl3.innerHTML = "Temp: " + data.list[7].main.temp + " K";
                initialWindEl3.innerHTML = "Wind: " + data.list[7].wind.speed + " mph";
                initialHumEl3.innerHTML = "Humidity: " + data.list[7].main.humidity + " %";
                document.getElementById('i-icon3').src = 'http://openweathermap.org/img/w/' + data.list[7].weather[0].icon + '.png';
                initialFeelEl3.innerHTML = data.list[7].weather[0].description;

                initialTempEl4.innerHTML = "Temp: " + data.list[15].main.temp + " K";
                initialWindEl4.innerHTML = "Wind: " + data.list[15].wind.speed + " mph";
                initialHumEl4.innerHTML = "Humidity: " + data.list[15].main.humidity + " %";
                document.getElementById('i-icon4').src = 'http://openweathermap.org/img/w/' + data.list[15].weather[0].icon + '.png';
                initialFeelEl4.innerHTML = data.list[15].weather[0].description;

                initialTempEl5.innerHTML = "Temp: " + data.list[23].main.temp + " K";
                initialWindEl5.innerHTML = "Wind: " + data.list[23].wind.speed + " mph";
                initialHumEl5.innerHTML = "Humidity: " + data.list[23].main.humidity;
                document.getElementById('i-icon5').src = 'http://openweathermap.org/img/w/' + data.list[23].weather[0].icon + '.png';
                initialFeelEl5.innerHTML = data.list[23].weather[0].description;

                initialTempEl6.innerHTML = "Temp: " + data.list[31].main.temp + " K";
                initialWindEl6.innerHTML = "Wind: " + data.list[31].wind.speed + " mph";
                initialHumEl6.innerHTML = "Humidity: " + data.list[31].main.humidity + " %";
                document.getElementById('i-icon6').src = 'http://openweathermap.org/img/w/' + data.list[31].weather[0].icon + '.png';
                initialFeelEl6.innerHTML = data.list[31].weather[0].description;
            
        }
    });
}

/* To Save and Display Information to Local Storage */
function saveAll() {
    var oldStorage = [];

    var values = document.querySelectorAll('button');
    for (var i = 0; i < values.length; i++) {
      oldStorage.push(values[i].innerHTML);
    }
    var newStorage = oldStorage
    localStorage.setItem('items', JSON.stringify(newStorage));
}

function loadAll() {

    var storedvalue = localStorage.getItem('items');
    console.log(storedvalue);

    if (!storedvalue) {
        return false;
    }

    storedvalue = JSON.parse(storedvalue);
    console.log(storedvalue);

    for (var i = 0; i < storedvalue.length; i++) {
        if (storedvalue[i] != "Get Weather"){
        newword = storedvalue[i]
        var
            buttonNode = document.getElementById('button');
            btnNode = document.createElement("button");
            txtNode = document.createTextNode(newword);
            
        btnNode.appendChild(txtNode);
        buttonNode.appendChild(btnNode);
        }
    }

}

loadAll();


fetchButton.addEventListener('click', getApi);

