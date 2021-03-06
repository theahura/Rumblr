/*

REMOTE

This file details all of the code necessary to grab incoming data from the rumblr client for each user, 
and passes that data onto the server_handler. The serverhandler then passes everything where it needs to go. 

http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

*/

//Type: io; sets up server connection on localhost, channel 3001

var io = require('socket.io').listen(3001);

var hashTable = {}

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
				storeGeoLocation(data);
			}
			//Updates the chat messages from one user to another to the database
			//data includes: user name 1, user name 2, message content 
			else if (functionName == "updateMessages")
			{
				//updateMessages(data);
			}
			//COMMENT HERE
			else if (functionName == "requestNearbyRumbles")
			{
				requestNearbyRumbles(data);
			}
			else if (functionName == "storeEnemyProfileList")
			{
				storeEnemyProfileList(data)
			}
			else if (functionName == "getProfileList")
			{
				getProfileList(data);
			}
			console.log(hashTable);
			return true;
		}
		else
		{
			console.log("There was an error: data did not contain functionName");
			return false;
		}
	}



	function addToHashtable(object) {
		// Hashtable data elements
		hashTable[object.accountId] = {};
		hashTable[object.accountId].proImg = object.proImg;
		hashTable[object.accountId].accountId = object.accountId;
		hashTable[object.accountId].username = object.userName;
		hashTable[object.accountId].coordinates = object.coordinates;
		hashTable[object.accountId].emailAddress = object.emailAddress;
		hashTable[object.accountId].userGender = object.userGender;
		hashTable[object.accountId].enemyProfileList = {};
	}

	function checkUserRegistration(object) {
		// returns True if user is already registered, False if user is new
		if (hashTable[object.accountId]) {
			getProfileList(object)
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

	function storeEnemyProfileList(object) {
		// adds user info to enemy's enemyProfileList
		console.log("ACCT ID " + object.enemyAccountId)
		hashTable[object.enemyAccountId].enemyProfileList[object.userProfile.accountId]=object.userProfile;
	}

	function getProfileList(object) {
		console.log("THIS WAS CALLED")
		// returns user's enemyProfileList
		var data = {
			enemyProfileList: hashTable[object.accountId].enemyProfileList,
			functionName: "receiveEnemyProfileList"
		}
		console.log(hashTable[object.accountId].enemyProfileList)
		serverToClient(data)
	}

	function storeGeoLocation(object) {
		// saves latitude and longitude of user
		hashTable[object.accountId].coordinates = [object.userPositionLatitude,object.userPositionLongitude];
	}

	function getGeoLocation(object) {
		// returns latitude and longitude of user
		return hashTable[object.accountId].coordinates;
	}

	function storeproImg(object) {
		// saves user image as a string
		hashTable[object.accountId].proImg = object.proImg;
	}

	function getproImg(object) {
		// returns user image
		return hashTable[object.accountId].proImg;
	}

	function storeEmail(object) {
		// saves user email address as a string
		hashTable[object.accountId].emailAddress = object.emailAddress;
	}

	function getEmail(object) {
		// returns user email address
		return hashTable[object.accountId].emailAddress;
	}

	function storeGender(object) {
		// saves user email address as a string
		hashTable[object.accountId].userGender = object.userGender;
	}

	function getGender(object) {
		// returns user email address
		return hashTable[object.accountId].userGender;
	}

	function requestNearbyRumbles(object) {	
			nearestGamersList = []

		if (object.accountId && hashTable[object.accountId] && hashTable[object.accountId].coordinates) {
			latitude = Math.abs(hashTable[object.accountId].coordinates[0]);
			longitude = Math.abs(hashTable[object.accountId].coordinates[1]);
			for (var index in hashTable) {
				if (latitude-object.latRange  <= Math.abs(hashTable[index].coordinates[0]) 
					&& Math.abs(hashTable[index].coordinates[0]) <= latitude+object.latRange
					&& longitude-object.longRange <= Math.abs(hashTable[index].coordinates[1])
					&& Math.abs(hashTable[index].coordinates[1]) <= longitude+object.longRange
					&& index != object.accountId) {
					nearestGamersList.push(hashTable[index])
				}
			}
		}

		var data = {
			rumblesList: nearestGamersList,
			functionName: "getNearbyRumbles"
		}

		serverToClient(data); 
	}

});