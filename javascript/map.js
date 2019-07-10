$("#city").on( "keyup", function(evt) {
    evt.preventDefault();
    if (evt.key == 'Enter'){
    console.log( $( this ).val() );
    const city = $('#search').val().trim();
    initMap(city);
  });

function initMap(city){
    if (city === undefined){
        city = "gilbert,az";
    }
    console.log(city + " initMap");
    const initLocation = {lat:33.35597 , lng:  -111.7918};
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: initLocation}
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
                document.getElementById('map'), {zoom: 12, center: data[0].geometry.location}
            );

            for (let i = 0; i < data.length; i++){
                let location = data[i].geometry.location;
                let address = data[i].formatted_address;
                let name = data[i].name;
                let rating = data[i].rating;
            
                let contentString = '<div id="content">'+
                                    '<div id="siteNotice">'+
                                    '</div>'+
                                    '<h3 id="firstHeading" class="firstHeading">'+ name +'</h3>'+
                                    '<div id="bodyContent">'+
                                    '<p><b>Address: </b>'+ address +'</p>'+
                                    '<p><b>Rating: </b>'+ rating +'</p>'+
                                    '</div>'+
                                    '</div>';

                let infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                let marker = new google.maps.Marker({position: location, map: map});
                
                // marker.addListener('click', function() {
                //     infowindow.open(map, marker);
                // });

                google.maps.event.addListener(marker, 'mouseover', function () {
                    infowindow.open(map, marker);
                });
            
                google.maps.event.addListener(marker, 'mouseout', function () {
                    infowindow.close(map, marker);
                });
            }
        },
        error: function(error, msg){
            console.log(error);
            console.log(msg);
        }
        
    });
    /* .then(function(response){
        console.log("hello")
        console.log(response)
    }).catch(function(){console.log("hi")}) */
}
