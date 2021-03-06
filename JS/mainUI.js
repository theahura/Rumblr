/*

LOCAL

This file details all of the code necessary to make the rumblr UI dynamic and functional.

Requires jQuery library. 

Functions: 

	Project dependent


*/

/*$(document).ready(function() {
    $('#fullpage').fullpage();
});
*/

/* initializes fullPage.js */

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['firstSlide', 'secondSlide'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'top',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: true,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        resize : true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});


//generates a div in the People section of Rumbles
function generateDivOnMatch(isMatch)
{
	if(isMatch == true){
		var div = document.createElement("div");
		$(div).insertAfter(".matches");
		$(div).addClass("matches");

	}
}

function generateContactOnMatch(userProfile)
{
        var div = document.createElement("li");
        $(div).insertAfter(".peopleList");
        $(div).addClass("contact");

        userName = userProfile.userName;
        userEmail = userProfile.emailAddress;


        $('.contact').html(userName);
        $('.contact').html(userEmail);


}	

$('.button').mouseover(function() {
  $('.fist-icon').addClass('animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function() {
    $(this).removeClass('animated bounceInLeft');
    });
});