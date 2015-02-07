var hashTable = {};

var storeGeoLocation = function (object) {
	// saves latitude and longitude of user
	hashTable[object.accountId].coordinates = [object.userPositionLatitude,object.userPositionLongitude];
}

exports.storeGeoLocation = storeGeoLocation;

var getGeoLocation = function (object) {
	// returns latitude and longitude of user
	accountId = object.accountId;
	return hashTable[accountId].coordinates;
}