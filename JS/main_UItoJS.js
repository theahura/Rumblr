// $("#getLocation").click(function()
// {
// 	alert();
//     getLocation();
// });

$("#login").click(function()
{
     login();
});

$("#circle-left").click(function()
{

	$("#profileImage, #swipeContainer, #section, #proImg, #hr, #cover").fadeOut("slow")

});
$("#circle-right").click(function()
{
	$("#profileImage, #swipeContainer, #section, #proImg, #hr, #cover").fadeOut("slow")
});
$("#submitRadius").click(function()
{
    console.log($(userProx).val())
    convertInputMilesToDegrees($(userProx).val())
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
