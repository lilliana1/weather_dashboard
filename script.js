$(document).ready(function(){
  
function currentWeather(searchValue) {
    console.log(searchValue)
    $.ajax({
        
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET",
    }).then(function(response){

        console.log(response);
        $(".today").html("<h1>" + response.name + " Weather Details</h1>" + "Temperature " + response.main.temp)
        
    })
}

function getForecast(searchValue) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=8526bab28d6f75f024123eb744a72998",
        type: "GET"
    }).then(function(response){
        console.log(response)

        $(".forecast").html("<p>Feels like " + response.list[0].main.feels_like + "</p>");
    })
}

function getUV(lat, lon) {
    $ajax({
        url: "http://api.openweathermap.org/data/2.5/uvi" + "&appid=8526bab28d6f75f024123eb744a72998c&units=imperial" + "c&lat" + lat + "&lon" + lon,
        type: "GET"
    }).then(function(response){
        console.log(response)

        $(".uv").html("<p>uv" + response.value + "</p>")
        
    })
}

    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val()
        // console.log("City "  + searchValue)   

        //
        currentWeather(searchValue);
        getForecast(searchValue);
        getUV(response.coord.lat,response.coord.lon);
        
    })
})