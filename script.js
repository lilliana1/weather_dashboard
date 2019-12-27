//tells current date
var day  = moment().format('MMMM Do YYYY');  

   
$(document).ready(function(){
    
    
//get city temperature
function currentWeather(searchValue) {
    console.log(searchValue);
    $.ajax({
        
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET",
        dataType: "json"
    }).then(function(response){

        console.log(response);
        $(".today").html("<h2>" + response.name + " " + day + " Weather Details" + "</h2>" +  "<p>Temperature " + response.main.temp + "</p>" )
        getUV(response.coord.lat, response.coord.lon);
        console.log(response.coord.lat, response.coord.lon);
        
    })
}


//get city humidity
function getHumidity(searchValue) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET"
    }).then(function(response){
        console.log(response)

        $(".humidity").html("<p>Humidity: " + response.main.humidity + "%</p>");
    })
}
//get city wind speed
function getWindSpeed(searchValue) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET"
    }).then(function(response){
        console.log(response)

        $(".windSpeed").html("<p>Wind Speed: " + response.wind.speed + "MPH</p>");
    })
}

// // grabs forecast data from api
function getForecast (searchValue){
     $.ajax({
         url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&units=imperial" + "&appid=3be2b2b6acc21e3760901d15acf91f72",
         method: 'GET',
        dataType: "json"
    }).then(function(response){
        
        console.log(response);
        for (var i = 1; i <= response.list.length; i++) { 
        console.log(response.list[i].dt_txt)
        if(response.list[i].dt_txt.indexOf("15:00:00") !== -1){
        $(".forecast").append("<p> It will be " + response.list[i].main.temp + " on " + response.list[i].dt_txt + "</p>");
        console.log(response.list[i].main.temp)

                
  
        }
    }          
    })
 }


//get city UV
function getUV(lat, lon) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/uvi?"  + "&lat=" + lat + "&lon=" + lon + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET",
        dataType: "json"
    }).then(function(response){
        console.log(response)

        $(".uv").html("<p>uv" + ": " + response.value + "</p>");
        
    })
}

// get forecast for next 5 days
function forecast(searchValue) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?" + searchValue + "appid=8526bab28d6f75f024123eb744a72998",
        type: "GET"
    }).then(function(response){
        console.log(response);

        $(".forecast").html(response.forecast);
        
    })
}
// function that saves previous search
function history() {
    $(".historyButton").empty();
    let localArray = JSON.parse(localStorage.getItem("searchHistory"));
    console.log(localArray);
    
    if (localArray === null) {
        localArray = [];
    } 

    for (let index = 0; index < localArray.length; index++) {

        let newBtn = $("<button>").text(localArray[index]).addClass("historyBtn").attr("value",localArray[index]);
        $(".historyButton").append(newBtn)
        
        
    }
}

history()

    $(document).on("click", ".historyBtn",function() {
        let saveBtn = $(this).val();
        console.log(saveBtn);
        
        
        history();
        currentWeather(saveBtn);
        getHumidity(saveBtn);
        getWindSpeed(saveBtn);
        
        
        getForecast(saveBtn);
    })

    //when the search is click on 
    $("#search-button").on("click", function () {
        // gets value of user 
        var searchValue = $("#search-value").val();
        if (searchValue === "" || searchValue === " ") {
            alert("Empty Value is not searchable")
        } 
      
       

        // search function 
        else {
            saveLocal(searchValue)
            history();
            currentWeather(searchValue);
            getHumidity(searchValue);
            getWindSpeed(searchValue);
            forecast(searchValue);
            getUV(response.coord.lat,response.coord.lon);
        }
        
        
    })
})

function saveLocal(search) {
    
    let localArray = JSON.parse(localStorage.getItem("searchHistory"));
    if (localArray === null) {
        localArray = [];
    } 
    console.log(localArray);
    
    localArray.push(search);
    localStorage.setItem("searchHistory", JSON.stringify(localArray));
}

