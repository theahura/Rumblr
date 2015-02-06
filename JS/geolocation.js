/*

Local

This file details all of the code necessary to interact with the html geolocation api, which will allow users to find people within a certain vicinity

This code file will need access to the html geolocation api (native). 

http://tympanus.net/codrops/2012/10/11/real-time-geolocation-service-with-node-js/

Functions: 

	getLocation() - get the location, and store to a database
	

*/

<script>

var locStatus = document.getElementByID("location");
	
function get_location() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		locStatus.innerHTML = "Sorry, your browser does not support Geolocation services"
	}
}

function showPosition(position) {
	locStatus.innerHTML = "Latitude is " + position.coords.latitude + " and Longitude is" + position.coords.longitude;	
}

</script>