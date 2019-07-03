
$("#button-addon1").on( "click", function(evt) {
    evt.preventDefault();
    console.log( $( this ).val() );
  });

function initMap(city){
    if (city === undefined){
        city = "gilbert,az";
    }
    console.log(city + " initMap");
    const initLocation = {lat:33.35597 , lng:  -111.7918};
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: initLocation}
    );
    // how to put markers
    //let marker = new google.maps.Marker({position: initLocation, map: map});

    let url = "https://google-maps-places.herokuapp.com/places/"+city;

    // test this link in chrome. is working
    // http://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+%27gilbert,az%27&key=AIzaSyBAKsf4wV2-Yiv2OCyh430DERNzihp_v50
    
    $.ajax({
        url: url,
        method: 'GET',
        // async: true,
        // crossDomain: true,
        // dataType: ' jsonp',
        // contentType: 'application/json',
        // headers: {
        //     "Access-Control-Allow-Origin": '*' ,
        //     "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept',
        //     "Access-Control-Allow-Methods": 'GET, OPTIONS',
        //     "Content-Type": 'application/json'
        // }
        success: function(response){
            let data = response.results;
            //change the center of the map
            map = new google.maps.Map(
                document.getElementById('map'), {zoom: 10, center: data[0].geometry.location}
            );

            for (let i = 0; i < data.length; i++){
                let location = data[i].geometry.location;
                let marker = new google.maps.Marker({position: location, map: map});
            }
        },
        error: function(error, msg){
            console.log(error);
            console.log(msg);
        }
    }) /* .then(function(response){
        console.log("hello")
        console.log(response)
    }).catch(function(){console.log("hi")}) */
}

