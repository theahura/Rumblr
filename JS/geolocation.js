/*

Local

This file details all of the code necessary to interact with the html geolocation api, which will allow users to find people within a certain vicinity

This code file will need access to the html geolocation api (native). 

http://tympanus.net/codrops/2012/10/11/real-time-geolocation-service-with-node-js/

Functions: 

	getLocation() - get the location, and store to a database
	

*/

function getLocation()
{
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sendLocation);
		alert("Longitude = " + position.coords.longitude + " and Latitude = " + position.coords.latitude);
	} else {
		document.getElementByID("location").innerHTML = "Sorry, your browser does not support Geolocation services"
	}
}

function sendLocation(position) {

	var data = {
		functionName: "storeGeoLocation",
		userPositionLatitude: position.coords.latitude,
		userPositionLongitude: position.coords.longitude,
		userName: userName
	}

	ClientToServer(data);
	
}