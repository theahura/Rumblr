// $("#getLocation").click(function()
// {
// 	alert();
//     getLocation();
// });

$("#login").click(function()
{
     login();
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
