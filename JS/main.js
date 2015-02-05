/*

LOCAL

This file details all of the code necessary to for users to interact with the rest of rumblr through the UI; basically, the file that passes on user 
inputs to the server

Functions: 

	LogIn - User password check to server

	CreateAccount - set username, password, and starting competition tags (from a large list)

	UI Interaction stuff - make sure all buttons (besides those covered in other local files) actually work

	toServerHandler - the generic handler that all functions use to send info to the server

	fromServerHandler - the generic handler that all functions use to recieve info from the server
	
	updateNotifications - the generic handler for notifications and stuff that happens while the user is away

*/