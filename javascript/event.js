$(document).on('click', '.title-collapse', function () {
    console.log('next el??? -- ', $(this).next())
    if ($(this).next()[0].className.includes('open-description')) {
        $(this).next().removeClass('open-description');
        $(this).next().addClass('collapse-description');
    } else {
        $(this).next().removeClass('collapse-description');
        $(this).next().addClass('open-description');
    }
});

$(document).on('click', '.search-btn', function (event) {
    ///Decide which tab we are in this ONE place and then invoke the correct function
    //Tosolve this not in righ way but sort of
    //We can ensure we are on the correct tab before executing any code
    const isEventsTabSelected = $('a[class="nav-link active"]').text().trim() === 'Events';
    $('#events').empty()
    // if (isEventsTabSelected) {
        event.preventDefault();
        const city = $('#search').val().trim();
        console.log('OUt city', city, $('#search'))

        let queryURL = 'https://api.eventful.com/json/events/search?app_key=tBrJGCvpbKcsx2jS&location=' + city + '&date=Future&page_size=55'
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
            var counter = 0;
            for (let i = 0; i < res.events.event.length; i++) {
                if (counter === 15) {
                    break;
                }
                console.log(res.events.event[i].title);
                var regEx = /<[a-z][\s\S]>*/i;
                var htmlFound = regEx.test(res.events.event[i].description);
                var descriptionIsValid = res.events.event[i].description && res.events.event[i].description !== res.events.event[i].title;
                if (!htmlFound && descriptionIsValid) {
                    const bEl = $('<button>').text("Buy").on('click', function(event){
                        event.preventDefault();
                        window.open(
                            res.events.event[i].url,
                            '_blank' // <- This is what makes it open in a new window.
                          );
                    });


                    const newDiv = $('<div>');
                    const pEl = $('<p>').addClass('collapsed-description').text(res.events.event[i].description);
                    const hEl = $('<h1>').addClass('title-collapse').text(res.events.event[i].title);


                    pEl.append(bEl);
                    newDiv.append(hEl).append(pEl);
                    $('#events').append(newDiv);
                    counter++;

                }
            }

        })


    }

})
        $('#search').val('');
})
