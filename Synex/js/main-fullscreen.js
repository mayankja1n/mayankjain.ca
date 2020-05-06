	/*
* iSOON - Ideal Coming Soon Template
* Release Date: April 2017
* Last Update: April 2017
* Author: Madeon08
* Copyright (C) 2017 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Basic functions
    3. Fullpage
    4. Countdown
    5. Photo galleries
    6. Menu animations
    7. Newsletter
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {
    "use strict";

    $("#right-block-top , #right-block-bottom , #fullpage , #fp-nav , #menu-access , .social-footer").css("opacity", "0");
    $("#fullpage").css("top", "100vh");
    setTimeout(function() {
        $("#loading").fadeOut();
    }, 1000);
    setTimeout(function() {
        $("#fullpage").css({
            top: "0",
            opacity: "1"
        });
        $("#right-block-top").addClass("animated-quick fadeInUp").css("opacity", "1");
    }, 1500);
    setTimeout(function() {
        $("#right-block-bottom").addClass("animated-quick fadeInUp").css("opacity", "1");
    }, 1600);
    setTimeout(function() {
        $("#fp-nav , #menu-access , .social-footer").css("opacity", "1");
        $("#right-block-bottom , #right-block-top").removeClass("animated-middle fadeInUp");
    }, 2210);
});

/* ------------------------------------- */
/* 2. Basic functions .................. */
/* ------------------------------------- */

function selectedfield() {
    var a = document.getElementById("reason");
    "placeholder" !== a.options[a.selectedIndex].value && $("#reason").removeClass("no-selection");
}

function menubutton() {
    $("#menu-access i").is(".ion-close-round") && ($("#menu-access i").removeClass("ion-close-round").addClass("ion-navicon-round").toggleClass("rotateIn"), setTimeout(function() {
        $("#menu-access i").removeClass("rotateIn");
    }, 620));
}

function menuclosing() {
    $("#menu , #fullpage , .holdscroll , #fp-nav , #menu-access").removeClass("menu-opened");
}
$("#menu-access").on("mouseenter mouseleave", function() {
    $(this).toggleClass("hovered");
});
$(".form-control").on("focusin focusout", function() {
    $(this).siblings(".icon-fields").toggleClass("active");
});
$(document).ready(function() {
    "use strict";

    /* ------------------------------------- */
    /* 3. Fullpage ......................... */
    /* ------------------------------------- */

    $("#fullpage").fullpage({
        anchors: "123456".split(""),
        navigationTooltips: "Home About Technology Advisors Opportunities Contact".split(" "),
        showActiveTooltip: !1,
        menu: "#menu",
        css3: !0,
        scrollingSpeed: 800,
        responsiveWidth: 1025
    });

    /* ------------------------------------- */
    /* 4. Countdown ........................ */
    /* ------------------------------------- */

                                  // Year/Month/Day Hour:Minute:Second
    $("#getting-started").countdown("2017/10/24 15:30:30", function(a) {
        $(this).html(a.strftime('%D Days <br> <span class="time">%Hh %Mm %Ss</span> <span class="text">... Before the launch</span>'));
    });

    /* ------------------------------------- */
    /* 5. Photo galleries .................. */
    /* ------------------------------------- */

    $("#gallery-1").on("click", function() {
        $.swipebox([{
            href: "img/gallery-1.jpg",
            title: "Carefully designed"
        }, {
            href: "img/gallery-2.jpg",
            title: "Colors of life"
        }, {
            href: "img/gallery-3.jpg",
            title: "Where the energy is"
        }]);
    });
    $("#gallery-2").on("click", function() {
        $.swipebox([{
            href: "img/gallery-2.jpg",
            title: "Carefully designed"
        }, {
            href: "img/gallery-3.jpg",
            title: "Colors of life"
        }, {
            href: "img/gallery-1.jpg",
            title: "Where the energy is"
        }]);
    });
	
	$("#job-1").on("click", function() {
        $.swipebox([{
            href: "img/gallery-2.jpg",
            title: "Carefully designed"
        }]);
    });
	
	$("#job-2").on("click", function() {
        $.swipebox([{
            href: "img/gallery-2.jpg",
            title: "Carefully designed"
        }]);
    });
	
	$("#job-3").on("click", function() {
        $.swipebox([{
            href: "img/gallery-2.jpg",
            title: "Carefully designed"
        }]);
    });
	
	$("#job-4").on("click", function() {
        $.swipebox([{
            href: "img/gallery-2.jpg",
            title: "Carefully designed"
        }]);
    });

    /* ------------------------------------- */
    /* 6. Menu animations .................. */
    /* ------------------------------------- */

   $(window).on("click", function(a) {
        "fp-nav" === a.target.id || $("#menu-access , #fp-nav li, #fp-nav a").find(a.target).length || (menuclosing(), menubutton());
    });

    $("#menu-access").on("click", function(event) {
        event.stopPropagation();
        $("#menu , #fullpage , #fp-nav").toggleClass("menu-opened");
        $("#menu-access i").toggleClass("ion-close-round ion-navicon-round rotateIn");
        setTimeout(function() {
            $("#menu-access i").removeClass("rotateIn");
        }, 620);
    });
    
    $(document).on("keyup", function(a) {
        27 == a.keyCode && (menuclosing(), menubutton());
    });

    // The "slide" class is added by JS below, after the fullpage launching to avoid any conflict with the fullpage's slides.
    $("#carousel-services").addClass("slide");
	$("#carousel-advisors").addClass("slide");
	$("#carousel-opportunities").addClass("slide");
	
	//Hide the left nav arrow on start (Added by Mayank)
	
	$("#section2 .fa-angle-left").hide();
	$("#section3 .fa-angle-left").hide();


	// Navigation Arrow Animations (Added by Mayank)
	
	
	if ($("#section2 .fp-slides .slide").eq(1).hasClass("active")) {
			$("#section2 .fa-angle-right").hide(500);
			$("#section2 .fa-angle-left").show(500);
		} else {
			$("#section2 .fa-angle-right").show(500);
			$("#section2 .fa-angle-left").hide(500);
	} 
	
	if ($("#section3 .fp-slides .slide").eq(1).hasClass("active")) {
			$("#section3 .fa-angle-right").hide(500);
			$("#section3 .fa-angle-left").show(500);
		} else {
			$("#section3 .fa-angle-right").show(500);
			$("#section3 .fa-angle-left").hide(500);
	} 
	
	
	$("#section2 .fa-angle-left").click(function(){
		if ($("#section2 .fp-slides .slide").eq(0).hasClass("active")) {
			$("#section2 .fa-angle-right").hide(500);
			$("#section2 .fa-angle-left").show(500);
		} else {
			$("#section2 .fa-angle-right").show(500);
			$("#section2 .fa-angle-left").hide(500);
		} 
	});
	
	$("#section2 .fa-angle-right").click(function(){
		if ($("#section2 .fp-slides .slide").eq(0).hasClass("active")) {
			$("#section2 .fa-angle-right").hide(500);
			$("#section2 .fa-angle-left").show(500);
		} else {
			$("#section2 .fa-angle-right").show(500);
			$("#section2 .fa-angle-left").hide(500);
		} 
	});
	
	$("#section3 .fa-angle-left").click(function(){
		if ($("#section3 .fp-slides .slide").eq(0).hasClass("active")) {
			$("#section3 .fa-angle-right").hide(500);
			$("#section3 .fa-angle-left").show(500);
		} else {
			$("#section3 .fa-angle-right").show(500);
			$("#section3 .fa-angle-left").hide(500);
		} 
	});
	
	$("#section3 .fa-angle-right").click(function(){
		if ($("#section3 .fp-slides .slide").eq(0).hasClass("active")) {
			$("#section3 .fa-angle-right").hide(500);
			$("#section3 .fa-angle-left").show(500);
		} else {
			$("#section3 .fa-angle-right").show(500);
			$("#section3 .fa-angle-left").hide(500);
		} 
	});
	
	/*
	$("#section2 .fa-angle-left").click(function(){
		$("#section2 .fa-angle-left").hide(750);
		$("#section2 .fa-angle-right").show(750);
	});
	
	$("#section2 .fa-angle-right").click(function(){
		$("#section2 .fa-angle-right").hide(750);
		$("#section2 .fa-angle-left").show(750);
	});
	
	$("#section3 .fa-angle-left").click(function(){
		$("#section3 .fa-angle-left").hide(750);
		$("#section3 .fa-angle-right").show(750);
	});
	
	$("#section3 .fa-angle-right").click(function(){
		$("#section3 .fa-angle-right").hide(750);
		$("#section3 .fa-angle-left").show(750);
	});
	
	*/
	

    /* ------------------------------------- */
    /* 7. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();
});

if ($("#section2 .fp-slides .slide").eq(1).hasClass("active")) {
		$("#section2 .fa-angle-right").hide(500);
		$("#section2 .fa-angle-left").show(500);
	} else if ($("#section2 .fp-slides .slide").eq(0).hasClass("active")){
		$("#section2 .fa-angle-right").show(500);
		$("#section2 .fa-angle-left").hide(500);
	} 