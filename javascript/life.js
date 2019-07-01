
$(document).on('click', '.search-btn', function(event){
    event.preventDefault();

    const city = $('#search').val().trim()
    const queryURL = 'https://api.worldweatheronline.com/premium/v1/past-weather.ashx/?format=json&date=2018-02-01&enddate=2018-02-28&key=800def3bb80c42488da184817192906&q=' + city
    $.ajax({
        url: queryURL,
        method: 'GET'})
        .then(function(response){
            console.log(response)
        })
    $('#search').val('');
})

console.log();
