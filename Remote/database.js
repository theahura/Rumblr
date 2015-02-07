var hashTable = {}

function addToHashtable(object) {
	// Hashtable data elements
	hashTable[object.accountId] = {};
	hashTable[object.accountId].username = object.username;
	hashTable[object.accountId].password = object.password;
	hashTable[object.accountId].gameChoices = object.gameChoices;
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