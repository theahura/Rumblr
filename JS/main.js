/*

LOCAL

This file details all of the code necessary to for users to interact with the rest of rumblr through the UI; basically, the file that passes on user 
inputs to the server

Functions: T

	LogIn - User password check to server

	CreateAccount - set username, password, and starting competition tags (from a large list)

	UI Interaction stuff - make sure all buttons (besides those covered in other local files) actually work

	toServerHandler - the generic handler that all functions use to send info to the server

	fromServerHandler - the generic handler that all functions use to receive info from the server
	
	updateNotifications - the generic handler for notifications and stuff that happens while the user is away

	updateLocation() - generic handler for sending the current location to the server, to be called every 10 min or soT

*/
//This function checks for the validity of the login.
function populateOnLogin(obj)
{
    userName = obj.userName
    accountId = obj.accountId
    proImg = obj.proImg
    userAge = obj.userAge
    userGender = obj.userGender
    alert(userName)
}

//Type: Socket; used to transfer data/commands to the student
socket = io('http://54.86.173.127:3001');

	/**
 * When the socket connects (receiving 'connect' as a command) 
 * it emits its room choice to the socket.io server, which 
 * then handles room delegation. 
 * 
 * This is done to ensure that multiple teachers only communicate with their own students
 * 
 * @Param: 'connect'; name of command that socket is listening for
 * @Param: function; callback upon receiving command
 */
socket.on('connect', function() 
{
});

socket.on("incomingMessage", function(data)
{
	console.log(data.message);
});

function sendMessage(inputText)
{
	socket.emit("message", {
		text:inputText
	});	
}


/**
* 
*/
function clientToServer(data)
{
	alert(data)
	socket.emit('clientToServer', data)
}

socket.on('serverToClient', function(data)
{

	if (data.functionName)
	{
		var functionName = data.functionName
		/**
		* populateOnLogin 
		* data should contain: user settings
		*/
		if (functionName == "populateOnLogin")
		{
			populateOnLogin(data)
		}	
		/**
		* receiveNewChatMessage
		* data should contain: message sender's userName
		*/
		else if (functionName == "receiveMessage")
		{
			receiveMessage(data)
		}
		else if(functionName == "getNearbyRumbles")
		{
			getNearbyRumbles(data)
		}
	}
	else
	{
		console.log("There was an error: data did not contain functionName")
		return false
	}

});


//This function returns the profile requested in the previous function

function getProfileFromList(profile) {

	var enemyProfile = {
		enemyUserName: profile.userName,
	 	enemyAccountId:  profile.accountId,
		enemyProImg: profile.proImg,
		enemyUserGender: profile.userGender,
		enemyUserAge: profile.userAge,
		enemyCurrentLocation: profile.currentLocation
	}

}

function convertInputMilesToDegrees(miles) {

	range.latitudeRange = miles/68.6863716
	range.longitudeRange = abs(miles/(69.1710411 * cos(currentLatitude)))
}

