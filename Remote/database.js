var hashTable = {}

function addToHashtable(object) {
	// Hashtable data elements
	googleID = object.googleID;
	hashTable[googleID] = [];
	hashTable[googleID].username = object.username;
	hashTable[googleID].password = object.password;
	hashTable[googleID].gameChoices = [];
	hashTable[googleID].swipeRightIDs = [];
	hashTable[googleID].location = [];
}

function checkUserRegistration(object) {
	// returns True if user is already registered, False if user is new
	googleIDPossible = object.googleID;
	if (hashTable[googleIDPossible]) {
		return True;
	}

	else {
		return False;
	}
}

function storeGameChoices(object) {
	// saves game choices into hashtable
	googleID = object.googleID;
	hashTable[googleID].gameChoices = googleID.gameChoices;
}

function getGameChoices(object) {
	// returns game choices of user
	googleID = object.googleID;
	return hashTable[googleID].gameChoices;
}

function storeSwipeRightIDs(object) {
	// saves Swipe Right IDs of user
	googleID = object.googleID;
	hashTable[googleID].swipeRightIDs = object.swipeRightIDs;
}

function getSwipeRightIDs(object) {
	// returns Swipe Right IDs of user
	googleID = object.googleID;
	return hashTable[googleID].swipeRightIDs;
}

function storeGeoLocation(object) {
	// saves latitude and longitude of user
	googleID = object.googleID;
	hashTable[googleID].location = [object.latitude,object.longitude];
}

function getGeoLocation(object) {
	// returns latitude and longitude of user
	googleID = object.googleID;
	return hashTable[googleID].location
}

function nearestGamers(object) {
	googleID = object.googleID;
	
}