let highs = [];
let lows = [];
const monthHighs = ['Jan avg high: ','Feb avg high: ','Mar avg high: ','Apr avg high: ','May avg high: ','Jun avg high: ','Jul avg high: ','Aug avg high: ','Sep avg high: ','Oct avg high: ','Nov avg high: ','Dec avg high: '];
const monthLows = ['Jan avg low: ','Feb avg low: ','Mar avg low: ','Apr avg low: ','May avg low: ','Jun avg low: ','Jul avg low: ','Aug avg low: ','Sep avg low: ','Oct avg low: ','Nov avg low: ','Dec avg low: ']
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
$(document).on('click', '.search-btn', function(event){
    event.preventDefault();
    const city = $('#search').val().trim();
    const queryURL = 'https://api.worldweatheronline.com/premium/v1/weather.ashx/?format=json&key=80c4283111cd411388653908190107&mca=yes&cc=yes&q=' + city;
    $('#weather').empty();
    highs = [];
    lows = [];
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response.data)
        const average = response.data.ClimateAverages[0].month
        
        for (let i=0; i<average.length;i++){
            highs.push(Math.round(average[i].absMaxTemp_F));
            lows.push(Math.round(average[i].avgMinTemp_F));
        }
        
        for (let i=0; i<highs.length; i++){
            const weatherHigh = $('<div>');
            const weatherLow = $('<div>');
            weatherHigh.append(monthHighs[i] + highs[i]).addClass('temps-high');
            weatherLow.append(monthLows[i] + lows[i]).addClass('temps-low');
            $('#weather').append(weatherHigh, weatherLow);
            if (highs[i]>=100){
                weatherHigh.css('background-color', 'red');
            }
            if (lows[i]>=100){
                weatherLow.css('background-color', 'red');
            }
            else if (highs[i]<=99 && highs[i]>=80){
                weatherHigh.css('background-color', 'orange');
            }
            else if (lows[i]<=99 && lows[i]>=80){
                weatherLow.css('background-color', 'orange');
            }
            else if (highs[i]<=79 && highs[i]>=60){
                weatherHigh.css('background-color', 'green');
            }
            else if (lows[i]<=79 && lows[i]>=60){
                weatherLow.css('background-color', 'green');
            }
            else if (highs[i]<=59 && highs[i]>=40){
                weatherHigh.css('background-color', 'lightblue');
            }
            else if (lows[i]<=59 && lows[i]>=40){
                weatherLow.css('background-color', 'lightblue');
            }
            else if (highs[i]<=39 && highs[i]>=20){
                weatherHigh.css('background-color', 'blue')
            }
            else if (lows[i]<=39 && lows[i]>=20){
                weatherLow.css('background-color', 'blue')
            }
            else if (highs[i]<=19){
                weatherHigh.css('background-color', 'darkblue')
            }
            else if (lows[i]<=19){
                weatherLow.css('background-color', 'darkblue')
            }
        }
        console.log($('#weather>div').data('high'))
    })
        $('#collapseOne').removeClass('show')
})