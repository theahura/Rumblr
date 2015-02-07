var hashTable = {}

module.exports = {
	function addToHashtable(object) {
		// Hashtable data elements
		hashTable[object.accountId] = {};
		hashTable[object.accountId].username = object.username;
		hashTable[object.accountId].password = object.password;
		hashTable[object.accountId].gameChoices = {};
		hashTable[object.accountId].swipeRightIDs = {};
		hashTable[object.accountId].coordinates = {};
		return hashTable[object.accountId]
	}

	function checkUserRegistration(object) {
		// returns True if user is already registered, False if user is new
		if (hashTable[object.accountId]) {
			return hashTable[object.accountId];
		}

		else {
			addToHashtable(object);
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

		for (var index in hashTable) {
			if (latitude-range <= hashTable[index].coordinates[0] <= latitude+range) {
				document.write(index+"<br>"+hashTable[index].coordinates[0]+"<br>");
			}
		}
	}

	document.getElementById("alertbutton").onclick = function() {
		var obj1 = [];
		obj1.accountId = 123;
		obj1.accountId.username = "Ganesh";
		obj1.accountId.password = "Columbia";
		obj1.accountId.gameChoices = ["MarioKart", "StarCraft"];
		obj1.accountId.swipeRightIDs = [234,453];
		obj1.accountId.coordinates = [100,100];

		var obj2 = [];
		obj2.accountId = 453;
		obj2.accountId.username = "Amol";
		obj2.accountId.password = "Columbae";
		obj2.accountId.gameChoices = ["MarioKart", "WarCraft"];
		obj2.accountId.swipeRightIDs = [123,199];
		obj2.accountId.coordinates = [103,500];

		addToHashtable(obj1);
		addToHashtable(obj2);
		nearestGamers(obj2,4);
	}
}