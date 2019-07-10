$('#city').on('keyup', function (event) {
    event.preventDefault();
    if (event.key == 'Enter'){
    ///Decide which tab we are in this ONE place and then invoke the correct function
    //Tosolve this not in righ way but sort of
    //We can ensure we are on the correct tab before executing any code
        $('#events').empty()
        const city = $('#city').val().trim();
        console.log('OUt city', city, $('#city'))

        let queryURL = 'https://api.eventful.com/json/events/search?app_key=tBrJGCvpbKcsx2jS&location=' + city + '&date=Future&page_size=15'
        $.ajax({
            url: queryURL,
            method: "GET",
            contentType: 'application/json; charset=utf-8',
            crossDomain: true,
            dataType: 'jsonp'

        }).then(function (response) {
            const res = response;
            console.log(res.events.event);
            // const eventLocal = JSON.parse(response.events.event)
            // console.log(eventLocal);

            for (let i = 0; i < res.events.event.length; i++) {
                const newDiv = $('<div>');
                const pEl = $('<p>').text(res.events.event[i].description);
                const hEl = $('<h1>').text(res.events.event[i].title);
                newDiv.append(hEl).append(pEl);
                $('#events').append(newDiv);
            }

        })
    }
})