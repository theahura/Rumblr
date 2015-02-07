/*

LOCAL

This file details all of the code necessary to for users to interact with the rest of rumblr through the UI; basically, the file that passes on user 
inputs to the server

Functions: T

	LogIn - User password check to server

	CreateAccount - set username, password, and starting competition tags (from a large list)

	UI Interaction stuff - make sure all buttons (besides those covered in other local files) actually work

	toServerHandler - the generic handler that all functions use to send info to the server

	fromServerHandler - the generic handler that all functions use to recieve info from the server
	
	updateNotifications - the generic handler for notifications and stuff that happens while the user is away

	updateLocation() - generic handler for sending the current location to the server, to be called every 10 min or soT

*/

//This function checks for the validity of the login.
function populateOnLogin(boolean a)
{

}

//Type: Socket; used to transfer data/commands to the student
socket = io('http://54.86.173.127:3001');

	/**
 * When the socket connects (recieving 'connect' as a command) 
 * it emits it's room choice to the socket.io server, which 
 * then handles room delegation. 
 * 
 * This is done to ensure that multiple teachers only communicate with their own students
 * 
 * @Param: 'connect'; name of command that socket is listening for
 * @Param: function; callback upon recieving command
 */
socket.on('connect', function() 
{
});
/**
* 
*/
userName = "DickButt"
function ClientToServer(data)
{
	socket.emit('ClientToServer', data)
	alert("worked")
}

socket.on('ServerToClient', function(data)
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
		* data should contain: message author
		*/
		else if (functionName == "receiveNewChatMessage")
		{
			receiveNewChatMessage(data)
		}
		else if(functionName == "")
		{
			
		}
	}
	else
	{
		console.log("There was an error: data did not contain functionName")
		return false
	}

});