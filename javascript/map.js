
function initMap(city){
    if (city === undefined){
        city = "gilbert,az";
    }
    console.log(city + " initMap");
    const initLocation = {lat:33.35597 , lng:  -111.7918};
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: initLocation}
    );
    // how to put markers
    //let marker = new google.maps.Marker({position: initLocation, map: map});

    let url = "http://maps.googleapis.com/maps/api/place/textsearch/json?query=places+in+%27"+city+"%27&key=AIzaSyBAKsf4wV2-Yiv2OCyh430DERNzihp_v50";
    
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
        // },
        success: function(response){
            console.log(response.data);

            // create a marker for each one of the responses of the API. 
            
        },
        error: function(error, msg){
            console.log(error);
            console.log(msg);
        }
    });
}