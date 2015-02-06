/*

LOCAL

This file details all of the code necessary to make the rumblr UI dynamic and functional.

Requires jQuery library. 

Functions: 

	Project dependent


*/

$('.button').mouseover(function() {
  $('.fist-icon').addClass('animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function() {
    $(this).removeClass('animated bounceInLeft');
    });
});