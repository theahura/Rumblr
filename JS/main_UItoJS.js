// $("#getLocation").click(function()
// {
// 	alert();
//     getLocation();
// });

$("#login").click(function()
{
     login();
});

$(".circle-left").click(function()
{
	$(".newProfile").fadeOut("slow", function(){
		getProfileFromList(nearbyRumbles.pop())
	})

	$(".newProfile").fadeIn()
});

$(".circle-right").click(function()
{
	if(enemyProfile)
	{
		var obj = {
			enemyAccountId: enemyProfile.enemyAccountId,
			functionName: "storeEnemyProfileList",
			userProfile: {
					userName: userName, 
					accountId: accountId,
					emailAddress: emailAddress,
					proImg: proImg,
					userGender: userGender, 
					userAge: userAge
				}
		}
		socket.emit('clientToServer', obj)
	}

	$(".newProfile").fadeOut("slow", function(){
		getProfileFromList(nearbyRumbles.pop())
	})
	$(".newProfile").fadeIn()
});

$("#submitRadius").click(function()
{
    convertInputMilesToDegrees($(userProx).val())
    $('.userRadius').html($(userProx).val());
});

$("#getNearbyRumblesButton").click(function()
{
	requestNearbyRumbles();
})

$(".refresh").click(function()
{
	var obj = { 
		functionName: "getProfileList", 
		accountId: accountId
	}

	clientToServer(obj)
})

// $("#getLocationFromServer").click(function()
// {
//     getLocationFromServer();
// });
		  
// $(.userName).html(userName);
// $(.userAge).html(userAge);
// $(.userGender).html(userGender);
// $(.currentLocation).html(currentLocation);



function createPersonList(data)
{
	console.log(data);
	var $EventObj = $("#People_Template").clone();

	$EventObj.attr("id","");

	$EventObj.find(".enemyUserName").html(data.userName);
	$EventObj.find(".enemyUserGender").html(data.userGender);
	$EventObj.find(".enemyEmailAddress").html(data.emailAddress);

	$(".peopleList").append($EventObj);
}
