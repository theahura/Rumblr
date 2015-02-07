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
	$("#profileImage, #swipeContainer, #section, #proImg, #hr, #cover").fadeIn("slow")

});
$("#circle-right").click(function()
{
	$("#profileImage, #swipeContainer, #section, #proImg, #hr, #cover").fadeOut("slow")
	$("#profileImage, #swipeContainer, #section, #proImg, #hr, #cover").fadeIn("slow")
});
$("#submitRadius").click(function()
{
    console.log($(userProx).val())
    convertInputMilesToDegrees($(userProx).val())
});

// $("#getLocationFromServer").click(function()
// {
//     getLocationFromServer();
// });
		  
// $(.userName).html(userName);
// $(.userAge).html(userAge);
// $(.userGender).html(userGender);
// $(.currentLocation).html(currentLocation);
