let highs = [];
let lows = [];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
$(document).on('click', '.search-btn', function(event){
    event.preventDefault();
    const city = $('#search').val().trim();
    const queryURL = 'https://api.worldweatheronline.com/premium/v1/weather.ashx/?format=json&key=80c4283111cd411388653908190107&mca=yes&cc=yes&q=' + city;
    $('#weather-table > tbody').empty();
    highs = [];
    lows = [];
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response.data);
        const average = response.data.ClimateAverages[0].month;
        const currentCond = response.data.current_condition[0];
        $('#weather').prepend('Current Temp: ' + currentCond.temp_F)
        for (let i=0; i<average.length;i++){
            highs.push(Math.round(average[i].absMaxTemp_F));
            lows.push(Math.round(average[i].avgMinTemp_F));
        }
        
        for (let i=0; i<highs.length; i++){
            const weatherRow = $('<tr>').append(
                    $('<td>').text(months[i]),
                    $('<td>').text(highs[i]).attr('high', highs[i]).data('high', highs[i]).addClass('temp-high'),
                    $('<td>').text(lows[i]).attr('low', lows[i]).addClass('temp-low')
                ).addClass(months[i]);

                $('.weather-table').append(weatherRow);
                if (highs[i]>=100){
                    $('.temp-high').addClass('100').removeClass('80 60');
                    $('.100').css('background-color', 'red');
                }
                if ($('.temp-low').attr('low')>=100){
                    $('.temp-low').css('background-color', 'red');
                }
                else if (highs[i]<=99 && highs[i]>=80){
                    $('.temp-high').addClass('80');
                    $('.80').css('background-color', 'orange');
                }
                else if ($('.temp-low').attr('low')<=99 && $('.temp-low').attr('low')>=80){
                    $('.temp-low').css('background-color', 'orange');
                }
                else if (highs[i]<=79 && highs[i]>=60){
                    $('.temp-high').addClass('60');
                    $('.60').css('background-color', 'green');
                }
                else if ($('.temp-low').attr('low')<=79 && $('.temp-low').attr('low')>=60){
                    $('.temp-low').css('background-color', 'green');
                }
                else if (highs[i]<=59 && highs[i]>=40){
                    $('.temp-high').addClass('40');
                    $('.40').css('background-color', 'lightblue');
                }
                else if ($('.temp-low').attr('low')<=59 && $('.temp-low').attr('low')>=40){
                    $('.temp-low').css('background-color', 'lightblue');
                }
                else if (highs[i]<=39 && highs[i]>=20){
                    $('.temp-high').addClass('20');
                    $('.20').css('background-color', 'blue');
                }
                else if ($('.temp-low').attr('low')<=39 && $('.temp-low').attr('low')>=20){
                    $('.temp-low').css('background-color', 'blue');
                }
                else if (highs[i]<=19){
                    $('.temp-high').addClass('0');
                    $('.0').css('background-color', 'darkblue');
                }
                else if ($('.temp-low').attr('low')<=19){
                    $('.temp-low').css('background-color', 'darkblue');
                }
            }
            console.log(highs[i]);
        })
        $('#collapseOne').removeClass('show');
})