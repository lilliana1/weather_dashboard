$(document).ready(function(){
    // 
    const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q="
    const weatherApiKey = "&appid=8526bab28d6f75f024123eb744a72998"

function currentWeather(searchValue){
    $.ajax({
        url: weatherUrl + searchValue + weatherApiKey + "c&units=imperial",
    type: "Get",
    }).then(function(response){
        console.log(response);
        
    })
}

    $("#search-button").on("click", function(){
        var searchValue = $("#search-value").val
    })
})