// $("#getLocation").click(function()
// {
// 	alert();
//     getLocation();
// });

$("#login").click(function()
{
     login();
});

$(".circle-left, .circle-right").click(function()
{
	$(".newProfile").fadeOut("slow", function(){
		getProfileFromList(nearbyRumbles.pop())
	})
	$(".newProfile").fadeIn()
});


$("#submitRadius").click(function()
{
    console.log($(userProx).val())
    convertInputMilesToDegrees($(userProx).val())
    $('.userRadius').html(userRadius);
});

$("#getNearbyRumblesButton").click(function()
{
	requestNearbyRumbles();
})

// $("#getLocationFromServer").click(function()
// {
//     getLocationFromServer();
// });
		  
// $(.userName).html(userName);
// $(.userAge).html(userAge);
// $(.userGender).html(userGender);
// $(.currentLocation).html(currentLocation);
