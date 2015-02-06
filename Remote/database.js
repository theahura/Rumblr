/*

REMOTE

This file details all of the code necessary to do database work; while it would normally use postgres, for this case arrays will be fast enough

checkUserPass() - checks username and password from the right hash

storeNotification(user, note) - save notification to a username 

getNotification(user, note) - get a notification for a username

getTags(user, tags) - get a tag array based on username

getLocation() - get the location of users nearby (random sample)

storeLocation(user, location) - store a location of a user in a hash 

*/