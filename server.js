/*

REMOTE

This file details all of the code necessary to grab incoming data from the rumblr client for each user, and passes that data onto the server_handler.

Functions: 

getDataFromUser() - get the data for a given request/command and pass that to the server_handler

sendDataToUser() - send data back to the user client, make sure that the data sent contains event titles and the like

http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

*/

//Type: io; sets up server connection on localhost, channel 3001
var  io = require('socket.io').listen(3001);

//  io.set('log level', 1);

//On an io socket connection...
io.sockets.on('connection', function(socket) 
{

	socket.emit("Hello", {
		Data: "Welcome to Rumblr"
	});

	socket.on('ClientToServer', function(data)
	{
		if (serverHandler(data) == false)
		{
			console.log("There was an error with the server handler");
			return false;
		}
	});

});


/*
	This function takes in data from the socket.io and passes it along to the right locations
	@param: data; type: object; the data that is passed from the socket.io
		data.functionName
	@return: boolean showing whether or not the function worked
*/
function serverHandler(data)
{
	if(data.functionName)
	{
		var functionName = data.functionName;

		if(functionName == "")
		{
			//call functionName(data)
		}
		else if(functionName == "")
		{
			//call functionName(data)
		}
	}
	else
	{
		console.log("There was an error: data did not contain functionName");
		return false;
	}
}