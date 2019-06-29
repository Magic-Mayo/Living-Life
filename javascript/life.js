$(document).on('click', '.search-btn', function(event){
    event.preventDefault();

    // const queryURL = 'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-02-01&enddate=2018-02-28&key=800def3bb80c42488da184817192906&q=' + city
    // $.ajax({
    //     url: queryURL,
    //     method: 'GET'})
    //     .then(function(response){
    //         console.log(response)
    //     })
    //     $('#search').val('');
    // })
    
const city = $('#search').val().trim()
const urls = [`'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-01-01&enddate=2018-01-31&
    key=800def3bb80c42488da184817192906&q='` + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-02-01&enddate=2018-02-28&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-03-01&enddate=2018-03-30&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-04-01&enddate=2018-04-31&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-05-01&enddate=2018-05-30&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-06-01&enddate=2018-06-30&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-07-01&enddate=2018-07-31&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-08-01&enddate=2018-08-31&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-09-01&enddate=2018-09-30&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-10-01&enddate=2018-10-31&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-11-01&enddate=2018-11-30&key=800def3bb80c42488da184817192906&q=' + city,
    'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-12-01&enddate=2018-12-31&key=800def3bb80c42488da184817192906&q=' + city];

$.each(urls, function(u){ 
     $.ajax(u, 
       {url: u,
        method: 'GET',
       })
       .then(function(response){
        console.log(response)
    })
$('#search').val('');
})
})

// Make search not collapsed on page load and collapse on search(add click to search on card header after bar is collapsed)