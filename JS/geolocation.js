/*

Local

This file details all of the code necessary to interact with the html geolocation api, which will allow users to find people within a certain vicinity

This code file will need access to the html geolocation api (native). 

Functions: 

	getLocation() - get the location from the user, passes to sendLocation()
	sendLocation(position) - sends the location to the server; takes location as parameter
	getLocationFromServer - sends the user's account ID to the server to get their previous location
	

*/

/*
Function: getLocation()
-----------------------------
This function checks whether or not the user's browser has a geolocation function.
If it does, it gets the user's location and passes it to the sendLocation function.
If not, it displays an error message. 
*/

function getLocation(sendToServer) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sendLocation)
	} else {
		alert("Sorry, your browser does not support Geolocation services")
	}
}


function getLocationForLogin()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(sendLocationForLogin)
	}
	else
	{
		alert("Sorry, your browser does not support Geolocation services")
	}
}

/*
Function: sendLocation(position)
--------------------------------------
This function passes the location of the user to the server. It takes a variable containing
the  location of the user (it calls this "position") as a parameter. It then creates a variable
data and assigns it a function name, the user's latitude and longitude, and the user's
name. 
*/

function sendLocation(position) {

	var data = {
		functionName: "storeGeolocation",
		userPositionLatitude: position.coords.latitude,
		userPositionLongitude: position.coords.longitude,
		accountId: accountId
	}

	clientToServer(data)

	currentLocation.currentLongitude = position.coords.longitude
	currentLocation.currentLatitude = position.coords.latitude

	alert("Longitude = " + position.coords.longitude + " and Latitude = " + position.coords.latitude);
	
}

function sendLocationForLogin(position)
{
	currentLocation.currentLongitude = position.coords.longitude
	currentLocation.currentLatitude = position.coords.latitude

	var obj = {
        functionName: "checkUserRegistration",
		userName: userName,
		accountId: accountId, 
		proImg: proImg, 
		userAge: userAge, 
		userGender: userGender, 
		emailAddress: emailAddress,
		coordinates: [currentLocation.currentLatitude, currentLocation.currentLongitude]
	}

	clientToServer(obj)	   
}



/*
Function: getLocationFromServer() 
----------------------------------------
This function takes no parameters. It sends the user's account ID to the server to get their
previous location. Not much else to say here. 


function requestLocationFromServer() {

	var data = {
		functionName: "getLocationFromServer",
		accountId: accountId
	}

	clientToServer(data)

	alert("Sent request to server")
}
*/

/*
Function: requestLocationFromServer
----------------------------------------
This function creates an alert returning the location associated with the variable data.
This should be sent from the server to the function. This location should be the last known
location of the user.


function getLocationFromServer(data) {

	return(data.location)
}

*/

//This function requests nearby rumbles

function requestNearbyRumbles() {

	var requestNearbyRumblesObject = {
		functionName: "requestNearbyRumbles",
		accountId: accountId,
		latRange: range.latitudeRange,
		longRange: range.longitudeRange
	}

	clientToServer(requestNearbyRumblesObject)

}

//This function returns nearby rumbles

function getNearbyRumbles(data) {

	console.log(data.rumblesList)
	nearbyRumbles = data.rumblesList

	if (nearbyRumbles.length > 0 ) {
		getProfileFromList(nearbyRumbles.pop())
	}
	else
	{
		getProfileFromList()
	}

}
