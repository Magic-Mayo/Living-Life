$(document).on('click','.search-btn', function(event){
    event.preventDefault();
    const city = $('#search').val().trim();
    
    
    let queryURL = 'https://api.eventful.com/json/events/search?app_key=tBrJGCvpbKcsx2jS&keywords=location=' +  city + '&date=Future&page_size=15'
    $.ajax({
        url: queryURL,
        method: "GET",
        
        
    }).then(function(response){
        const res = JSON.parse(response);
        console.log(res);
        console.log(res.events);
        const event = response.events.event
        for (let i=0;i<event.length;i++){
            const title = $('<div>')
            title.append(event[i].title,event[i].description)
            $('.card-body').append(title)
        }
        
    }) 


    
})