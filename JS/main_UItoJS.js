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

	$("").fadeOut("slow")
	$("").fadeIn("slow")

});
$("#circle-right").click(function()
{
	$("").fadeOut("slow")
	$("").fadeIn("slow")
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
