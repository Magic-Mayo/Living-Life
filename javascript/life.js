let highs = [];
let lows = [];

// $(document).on('click', '.search-btn', function(event){
//     event.preventDefault();
//     const city = $('#search').val().trim();
//     const queryURL = 'https://api.worldweatheronline.com/premium/v1/weather.ashx/?format=json&key=80c4283111cd411388653908190107&mca=yes&cc=yes&q=' + city;
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     }).then(function(response){
//         $('#collapseOne').removeClass('show')
//         console.log(response.data)
//         const average = response.data.ClimateAverages[0].month
//         $('#weather').empty();
//         for (let i=0; i<average.length;i++){
//             highs.push(Math.round(average[i].absMaxTemp_F));
//             lows.push(Math.round(average[i].avgMinTemp_F));
//         }
        
//         for (let i=0; i<highs.length; i++){
//             const weather = $('<div>');
//             weather.append('High: ' + highs[i], ' Low: ' + lows[i]).addClass('temps');
//             $('#weather').append(weather);
//         }
        
//         console.log(highs)
//     })
//         $('#search').val('');
// })
