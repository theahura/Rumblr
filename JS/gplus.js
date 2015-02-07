/*

LOCAL

This file details all of the code necessary to interact with the facebook api, that will allow users to grab information about other people.

This code file will need access to the facebook api. 

Functions: 

authenticate() - use oAuth sequence provided by facebook api to allow users to access their own data from the app/make other data public

requestData() - ping the server for a new user profile

displayData(data) - gets the data needed to generate a profile from the server and generates the HTML properly

*/

var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);

function logout()
{
    gapi.auth.signOut();
    location.reload();
}
function login() 
{
  var myParams = {
    'clientid' : '910432959217-ll9jmpv115of2s9rb55c4kof6lckd42p.apps.googleusercontent.com',
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'loginCallback',
    'approvalprompt':'force',
    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
  };
  gapi.auth.signIn(myParams);
}
 
function loginCallback(result)
{
    if(result['status']['signed_in'])
    {
	$('.cover').hide();
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
        request.execute(function (resp)
        {
            var email = '';
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];
                    }
                }
            }
	    /*
            var str = "Name:" + resp['displayName'] + "<br>";
            str += "Image:" + resp['image']['url'] + "<br>";
            str += "<img src='" + resp['image']['url'] + "' /><br>";
 
            str += "URL:" + resp['url'] + "<br>";
            str += "Email:" + email + "<br>";
	    str += "Account ID:" + resp['id'] + "<br>";		       
            document.getElementById("profile").innerHTML = str;
	    */
    	    obj = {
        		userName: resp['displayName'],
        		accountId: resp['id'],
        		proImg: resp['image']['url'],
        		userGender: resp['gender'],
        		ageRange: resp['ageRange']['min'],
        		emailAddress: email,
        		functionName: "checkUserRegistration"
    	    }
    	    console.log(resp['image']['url'])
    	    console.log(email)
    	    populateOnLogin(obj)

            getLocationForLogin()
        });
 
    }
 
}
function onLoadCallback()
{
    gapi.client.setApiKey('AIzaSyASBaefXgtUHhCP8tRGDT1rfXM1Vldt_io');
    gapi.client.load('plus', 'v1',function(){});
}
 
 
