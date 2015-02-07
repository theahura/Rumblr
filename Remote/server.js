/*

REMOTE

This file details all of the code necessary to grab incoming data from the rumblr client for each user, 
and passes that data onto the server_handler. The serverhandler then passes everything where it needs to go. 

http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

*/

//Type: io; sets up server connection on localhost, channel 3001

var database = require('./database.js');

var io = require('socket.io').listen(3001);

//On an io socket connection...
io.sockets.on('connection', function(socket) 
{
	socket.on('clientToServer', function(data)
	{
		if (serverHandler(data))
		{
			
		}
		else
		{
			console.log("There was an error with the server handler");
			return false;
		}
	});

	/*
		This function takes in data from the server remote files and passes it along to the client
		
		@param: data; type: object; the data that is passed from the remote server to the client
		@return: boolean showing whether or not the function worked
	*/
	function serverToClient(data)
	{
		socket.emit("serverToClient", data);
	}

});

/*
	This function takes in data from the socket.io and passes it along to the right locations
	@param: data; type: object; the data that is passed from the socket.io
		data.functionName
	@return: boolean showing whether or not the function worked
*/
function serverHandler(data)
{
	console.log(data);

	if(data.functionName)
	{
		var functionName = data.functionName;

		//sends data to login function
		//data includes: google account id, username

		if(functionName == "checkUserRegistration")
		{
			//checkUserRegistration(data);
		}
		//Updates the users geolocation to the database
		//data includes: google account id, new location;  userPositionLatitude; userPositionLongitude
		else if(functionName == "storeGeolocation")
		{
			storeGeolocation(data);
		}
		//Updates the chat messages from one user to another to the database
		//data includes: user name 1, user name 2, message content 
		else if (functionName == "updateMessages")
		{
			//updateMessages(data);
		}
		//COMMENT HERE
		else if (functionName == "")
		{
		
		}
	}
	else
	{
		console.log("There was an error: data did not contain functionName");
		return false;
	}
}







var hashTable = {}



function addToHashtable(object) {
	// Hashtable data elements
	hashTable[object.accountId] = {};
	hashTable[object.accountId].username = object.username;
	hashTable[object.accountId].swipeRightIDs = object.swipeRightIDs;
	hashTable[object.accountId].coordinates = object.coordinates;
}

function checkUserRegistration(object) {
	// returns True if user is already registered, False if user is new
	if (hashTable[object.accountId]) {
		return hashTable[object.accountId];
	}

	else {
		addToHashtable(object);
		return hashTable[object.accountId];
	}
}

function storeGameChoices(object) {
	// saves game choices into hashtable
	hashTable[object.accountId].gameChoices = accountId.gameChoices;
}

function getGameChoices(object) {
	// returns game choices of user
	return hashTable[object.accountId].gameChoices;
}

function storeSwipeRightIDs(object) {
	// saves Swipe Right IDs of user
	hashTable[object.accountId].swipeRightIDs = object.swipeRightIDs;
}

function getSwipeRightIDs(object) {
	// returns Swipe Right IDs of user
	return hashTable[object.accountId].swipeRightIDs;
}

function storeGeoLocation(object) {
	// saves latitude and longitude of user
	hashTable[object.accountId].coordinates = [object.userPositionLatitude,object.userPositionLongitude];
}

function getGeoLocation(object) {
	// returns latitude and longitude of user
	accountId = object.accountId;
	return hashTable[accountId].coordinates;
}

function nearestGamers(object, range) {
	latitude = hashTable[object.accountId].coordinates[0];
	longitude = hashTable[object.accountId].coordinates[1];
	nearestGamersList = []
	for (var index in hashTable) {
		if (latitude-range <= hashTable[index].coordinates[0] 
			&& hashTable[index].coordinates[0] <= latitude+range
			&& longitude-range <= hashTable[index].coordinates[1]
			&& hashTable[index].coordinates[1] <= longitude+range
			&& index 
			!= object.accountId) {
			nearestGamersList.push(index)
		}
	}
	return nearestGamersList
}