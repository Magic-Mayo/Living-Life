
let place = 'Chicago'.replace(' ', '+');


let queryURL = 'https://api.eventful.com/json/events/search?app_key=tBrJGCvpbKcsx2jS&keywords=location=' +  place + '&date=Future&page_size=15'
$.ajax({
    url: queryURL,
    method: "GET",


}).then(function(response){
    const res = JSON.parse(response);
    console.log(res);
    console.log(res.events);
}) 
