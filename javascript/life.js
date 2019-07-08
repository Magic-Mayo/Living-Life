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

        // Prepending current conditions so it's seen first
        $('#weather').prepend('<p>Current Temp: ' + currentCond.temp_F + '</p>')

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