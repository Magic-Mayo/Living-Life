$(document).on('load', function(){
    preloadMyImages();
})

// Function for preloading images
function preloadMyImages(){
    const imageList = [
        "../images/cloudy.gif",
        "../images/hail.gif",
        "../images/heavyrain.gif",
        "../images/partlycloudy.gif",
        "../images/rain.gif",
        "../images/snow.gif",
        "../images/storm.gif",
        "../images/sunny.jpg",
    ];
    for(let i = 0; i < imageList.length; i++ ){
        const imageObject = new Image();
        imageObject.src = imageList[i];
    }
    console.log(imageList)
}


// Empty arrays for adding temps into later on from ajax call
let highs = [];
let lows = [];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

$(document).on('click', '.search-btn', function(event){
    event.preventDefault();
    const city = $('#search').val().trim();
    const queryURL = 'https://api.worldweatheronline.com/premium/v1/weather.ashx/?format=json&key=800def3bb80c42488da184817192906&mca=yes&cc=yes&q=' + city;
    //Empty both tables and current weather conditions on each search
    $('#weather-table > tbody').empty();
    $('#weather > p:first').empty();

    //Setting the arrays to empty on each search
    highs = [];
    lows = [];

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response.data);
        const average = response.data.ClimateAverages[0].month;
        const currentCond = response.data.current_condition[0];
        const forecast = response.data.weather;
        const currentDesc = currentCond.weatherCode;

        console.log(currentDesc)
        // Prepending current conditions so it's seen first
        $('#weather').prepend('<p>Current Temp: ' + currentCond.temp_F + '</p>')

        // Setting the background image based on the current weather description for the currently searched city
        if (currentDesc == 122 || currentDesc == 119){
            $('body').css('background-image', 'url(../images/cloudy.gif)');
        }
        else if (currentDesc == 266 || currentDesc == 263 || currentDesc == 293 || currentDesc == 296 || currentDesc == 299 || currentDesc == 302 || currentDesc == 305 || currentDesc == 308 || currentDesc == 353 || currentDesc == 356 || currentDesc == 359 || currentDesc == 176){
            $('body').css('background-image', 'url(../images/rain.gif)');
        }
        else if (currentDesc == 116){
            $('body').css('background-image', 'url(../images/partlycloudy.gif)');
        }
        else if (currentDesc == 113){
            $('body').css('background-image', 'url(../images/sunny.jpg)');
        }
        else if (currentDesc == 200 || currentDesc == 386 || currentDesc == 389){
            $('body').css('background-image', 'url(../images/storm.gif)');
        }
        else if (currentDesc == 248 || currentDesc == 260 || currentDesc == 143){
            $('body').css('background-image', 'url(../images/foggy.jpg)');
        }
        else if (currentDesc == 392 || currentDesc == 395 || currentDesc == 368 || currentDesc == 371 || currentDesc == 338 || currentDesc == 332 || currentDesc == 335 || currentDesc == 329 || currentDesc == 326 || currentDesc == 323 || currentDesc == 230 || currentDesc == 227 || currentDesc == 179){
            $('body').css('background-image', 'url(../images/snow.gif)');
        }
        else if (currentDesc == 374 || currentDesc == 377 || currentDesc == 350 || currentDesc == 365 || currentDesc == 362 || currentDesc == 320 || currentDesc == 317 || currentDesc == 311 || currentDesc == 314 || currentDesc == 284 || currentDesc == 281 || currentDesc == 182 || currentDesc == 185){
            $('body').css('background-image', 'url(../images/hail.gif)');
        }

        // Loop to populate monthly average table
        for (let i=0; i<12;i++){
            highs.push(Math.round(average[i].absMaxTemp_F));
            lows.push(Math.round(average[i].avgMinTemp_F));
            const weatherRow = $('<tr>').append(
                    $('<td>').text(months[i]),
                    $('<td>').text(highs[i]).attr('high', highs[i]).data('high', highs[i]).addClass('temp-high'),
                    $('<td>').text(lows[i]).attr('low', lows[i]).addClass('temp-low'),
                    $('<td>').text(average[i].avgMonthlyRainfall_inch)
                ).addClass(months[i]);
    
            $('.weather-table').append(weatherRow);
        }

        // Loop to populate forecast table
        for (let i=0; i<5; i++){
            const forecastRow = $('<tr>').append(
                $('<td>').text(forecast[i].date),
                $('<td>').text(forecast[i].maxtempF),
                $('<td>').text(forecast[i].mintempF),
                $('<td>').text(forecast[i].astronomy[0].sunrise),
                $('<td>').text(forecast[i].astronomy[0].sunset),
            );
            $('.forecast-table').append(forecastRow);
        }
    })
        // Collapses nav search bar on search
        $('#collapseOne').removeClass('show');
})