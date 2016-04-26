$(function(){

	console.log('jQuery Test');

});

/*  google-map */

function initialize() {
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(29.6336443,106.2909672)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);
  /*var image = "img/icon-pin.png";
*/
  var myLatLng = new google.maps.LatLng(29.6336443,106.2909672);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    /*icon: image*/
  });
}

google.maps.event.addDomListener(window, 'load', initialize);