let janMaxTemp = []
let febMaxTemp = []
let marMaxTemp = []
let aprMaxTemp = []
let mayMaxTemp = []
let junMaxTemp = []
let julMaxTemp = []
let augMaxTemp = []
let sepMaxTemp = []
let octMaxTemp = []
let novMaxTemp = []
let decMaxTemp = []

let janMinTemp = []
let febMinTemp = []
let marMinTemp = []
let aprMinTemp = []
let mayMinTemp = []
let junMinTemp = []
let julMinTemp = []
let augMinTemp = []
let sepMinTemp = []
let octMinTemp = []
let novMinTemp = []
let decMinTemp = []

function average(input){
    const i = input.reduce((a,b)=>a+b, 0);
    console.log(Math.round(i/input.length))
    return Math.round(i/input.length);
}

$(document).on('click', '.search-btn', function(event){
    event.preventDefault();
    const city = $('#search').val().trim();
    const jan = '&date=2018-01-01&enddate=2018-01-31';
    const feb = '&date=2018-02-01&enddate=2018-02-28';
    const mar = '&date=2018-03-01&enddate=2018-03-31';
    const apr = '&date=2018-04-01&enddate=2018-04-30';
    const may = '&date=2018-05-01&enddate=2018-05-31';
    const jun = '&date=2018-06-01&enddate=2018-06-30';
    const jul = '&date=2018-07-01&enddate=2018-07-31';
    const aug = '&date=2018-08-01&enddate=2018-08-31';
    const sep = '&date=2018-09-01&enddate=2018-09-30';
    const oct = '&date=2018-10-01&enddate=2018-10-31';
    const nov = '&date=2018-11-01&enddate=2018-11-30';
    const dec = '&date=2018-12-01&enddate=2018-12-31';
    const queryURL = 'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&key=80c4283111cd411388653908190107&q=' + city;
    const ajaxJan = $.ajax({
        url: queryURL + jan,
        method: 'GET',
        async: true,
        });
    const ajaxFeb = $.ajax({
        url: queryURL + feb,
        method: 'GET',
        async: true,
        });
    const ajaxMar = $.ajax({
        url: queryURL + mar,
        method: 'GET',
        async: true,
        });
    const ajaxApr = $.ajax({
        url: queryURL + apr,
        method: 'GET',
        async: true,
        });
    const ajaxMay = $.ajax({
        url: queryURL + may,
        method: 'GET',
        async: true,
        });
    const ajaxJun = $.ajax({
        url: queryURL + jun,
        method: 'GET',
        async: true,
        });
    const ajaxJul = $.ajax({
        url: queryURL + jul,
        method: 'GET',
        async: true,
        });
    const ajaxAug = $.ajax({
        url: queryURL + aug,
        method: 'GET',
        async: true,
        });
    const ajaxSep = $.ajax({
        url: queryURL + sep,
        method: 'GET',
        async: true,
        });
    const ajaxOct = $.ajax({
        url: queryURL + oct,
        method: 'GET',
        async: true,
        });
    const ajaxNov = $.ajax({
        url: queryURL + nov,
        method: 'GET',
        async: true,
        });
    const ajaxDec = $.ajax({
        url: queryURL + dec,
        method: 'GET',
        async: true,
        });

    $.when(ajaxOct).then(function(octTemp){
    // $.when(ajaxJan, ajaxFeb, ajaxMar, ajaxApr, ajaxMay, ajaxJun, ajaxJul, ajaxAug, ajaxSep, ajaxOct, ajaxNov, ajaxDec).then(function(janTemp,febTemp,marTemp,aprTemp,mayTemp,junTemp,julTemp,augTemp,sepTemp,octTemp,novTemp,decTemp){
        console.log(octTemp)
        // for (let i=0; i<janTemp[0].data.weather.length; i++){
        //     janMaxTemp.push(janTemp[0].data.weather[i].maxtempF);
        //     janMinTemp.push(janTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<febTemp[0].data.weather.length; i++){
        //     febMaxTemp.push(febTemp[0].data.weather[i].maxtempF);
        //     febMinTemp.push(febTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<marTemp[0].data.weather.length; i++){
        //     marMaxTemp.push(marTemp[0].data.weather[i].maxtempF);
        //     marMinTemp.push(marTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<aprTemp[0].data.weather.length; i++){
        //     aprMaxTemp.push(aprTemp[0].data.weather[i].maxtempF);
        //     aprMinTemp.push(aprTemp[0].data.weather[i].mintempF);
        // }
        
        // for (let i=0; i<mayTemp[0].data.weather.length; i++){
        //     mayMaxTemp.push(mayTemp[0].data.weather[i].maxtempF);
        //     mayMinTemp.push(mayTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<junTemp[0].data.weather.length; i++){
        //     junMaxTemp.push(junTemp[0].data.weather[i].maxtempF);
        //     junMinTemp.push(junTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<julTemp[0].data.weather.length; i++){
        //     julMaxTemp.push(julTemp[0].data.weather[i].maxtempF);
        //     julMinTemp.push(julTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<augTemp[0].data.weather.length; i++){
        //     augMaxTemp.push(augTemp[0].data.weather[i].maxtempF);
        //     augMinTemp.push(augTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<sepTemp[0].data.weather.length; i++){
        //     sepMaxTemp.push(sepTemp[0].data.weather[i].maxtempF);
        //     sepMinTemp.push(sepTemp[0].data.weather[i].mintempF);
        // }

        for (let i=0; i<octTemp.data.weather.length; i++){
            octMinTemp.push(parseInt(octTemp.data.weather[i].mintempF));
            octMaxTemp.push(parseInt(octTemp.data.weather[i].maxtempF));
        }

        // for (let i=0; i<novTemp[0].data.weather.length; i++){
        //     novMaxTemp.push(novTemp[0].data.weather[i].maxtempF);
        //     novMinTemp.push(novTemp[0].data.weather[i].mintempF);
        // }

        // for (let i=0; i<decTemp[0].data.weather.length; i++){
        //     decMaxTemp.push(decTemp[0].data.weather[i].maxtempF);
        //     decMinTemp.push(decTemp[0].data.weather[i].mintempF);
        // }
        $('#weather').empty();
        $('#weather').append('<p>Oct Avg High: ' + average(octMaxTemp) + '</p>').addClass('temps');
        $('#weather').append('<p>Oct Avg Low: ' + average(octMinTemp) + '</p>');
    })

    $('#search').val('');
    $('#collapseOne').removeClass('show')
})