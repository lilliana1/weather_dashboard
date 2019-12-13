//tells current date
var day  = moment().format('MMMM Do YYYY');  

   
$(document).ready(function(){
    
    
    

//get city temperature
function currentWeather(searchValue) {
    console.log(searchValue);
    $.ajax({
        
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET",
    }).then(function(response){

        console.log(response);
        $(".today").html("<h2>" + response.name + " " + day + " Weather Details" + "</h2>" +  "<p>Temperature " + response.main.temp + "</p>" )
        
    })
}
//get city forecast
// function getForecast(searchValue) {
//     $.ajax({
//         url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
//         type: "GET"
//     }).then(function(response){
//         console.log(response)

//         $(".forecast").html("<p>Feels like " + response.list[0].main.feels_like + "</p>");
//     })
// }

//get city humidity
function getHumidity(searchValue) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET"
    }).then(function(response){
        console.log(response)

        $(".humidity").html("<p>Humidity: " + response.main.humidity + "%</p>");
    })
}
//get city wind speed
function getWindSpeed(searchValue) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET"
    }).then(function(response){
        console.log(response)

        $(".windSpeed").html("<p>Wind Speed: " + response.wind.speed + "MPH</p>");
    })
}

//get city UV
function getUV(lat, lon) {
    $ajax({
        url: "http://api.openweathermap.org/data/2.5/uvi?" + "appid=8526bab28d6f75f024123eb744a72998" + "&lat=" + lat + "&lon=" + lon,
        type: "GET"
    }).then(function(response){
        console.log(response)

        $(".uv").html("<p>uv" + response.value + "</p>");
        
    })
}

// get forecast for next 5 days
function forecast(searchValue) {
    $ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?" + searchValue + "appid=8526bab28d6f75f024123eb744a72998",
        type: "GET"
    }).then(function(response){
        console.log(response);

        $(".forecast").html(response.forecast);
        
    })
}
// function that saves previous search
function history(searchValue) {
    for (let index = 0; index < searchValue.length; index++) {
        $("#newBtn").html(searchValue);
        
    }
}




    //when the search is click on 
    $("#search-button").on("click", function () {
        // gets value of user 
        var searchValue = $("#search-value").val()
        //creating new button of previous search
        //  = $("<button>").click(searchValue))
        // $("#search-button").click(function () {
        // $("#newBtn").append(searchValue);
        // });

        // search function 
        history(searchValue);
        currentWeather(searchValue);
        getHumidity(searchValue);
        getWindSpeed(searchValue);
        forecast(searchValue);
        getUV(response.coord.lat,response.coord.lon);
        
    })
})




// searchOtherCity();
// function searchOtherCity() {
    
//     {
//         var str = localStorage.getItem("searchHistory");
//         if (str !== null) $('#search-value').val(str);
        
        
    
//     };
// }
// // click save button to set textInput to local storage 
// $(".saveBtn").on("click", function(event) {
//   event.preventDefault();
//   localStorage.setItem("searchHistory", $('#search-value').val());
//   searchOtherCity();
// });
