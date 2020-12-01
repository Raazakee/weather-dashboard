$(document).ready(function(){
    $(".searchCityBtn").on("click",function(){
        //console.log("btn clicked");
        const citySearch = $(".searchCityInput").val();
        //console.log(citySearch);
        $(".resultHeader").text(citySearch);
        loadJumbotron(citySearch)
    })
    function loadJumbotron(x){
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + x + "&units=imperial&appid=4e1d3f7a2819df21862189cf606302c7"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            var currentTemp = Math.floor(response.main.temp)
            $(".currentDayTemp").append(currentTemp);
            $(".currentDayHumid").append(response.main.humidity);
            $(".currentDayWind").append(response.wind.speed);
           

            
        })
    }
})

