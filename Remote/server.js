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
	socket.on('sendMessage', function(data))
	{
		
	}

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
			checkUserRegistration(data);
		}
		//Updates the users geolocation to the database
		//data includes: google account id, new location;  userPositionLatitude; userPositionLongitude
		else if(functionName == "storeGeolocation")
		{
			database.storeGeolocation(data);
		}
		//Updates the chat messages from one user to another to the database
		//data includes: user name 1, user name 2, message content 
		else if (functionName == "updateMessages")
		{
			updateMessages(data);
		}
		//COMMENT HERE
		else if (functionName == "sendMessage")
		{
			sendMessage()	
		}
	}
	else
	{
		console.log("There was an error: data did not contain functionName");
		return false;
	}
}