//  ----- scroll animation -----  //

$(function() {
 "use strict"; // Start of use strict	
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 700);
				return false;
			}
		}
	});	
}); 
/* -------------------- END -------------------- */


// Preloader //

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(550).fadeOut(); // will fade out the white DIV that covers the website. 
  $('body').delay(550).css({'overflow':'visible'});
});

/* -------------------- END -------------------- */


$(document).ready(function() {
	
/* For the sticky navigation */
    $('.js--section-1').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
	
/* -------------------- END -------------------- */
	
	
/* Scroll on Navigtion */
	$('.js--scroll-nav-1').click(function () {
       $('html, body').animate({scrollTop: $('#page-top').offset().top} ,1000);
    });
	
	$('.js--scroll-nav-2').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-1').offset().top} ,1000);	
    });
	
	$('.js--scroll-nav-3').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-4').offset().top} ,1000);	
    });
	
	$('.js--scroll-nav-4').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-2').offset().top} ,1000);	
    });
	
	$('.js--scroll-nav-5').click(function () {
       $('html, body').animate({scrollTop: $('.section-7-form').offset().top} ,1000);	
    });
	
/* Scroll on buttons */	
    $('.js--scroll-section-6').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-6').offset().top} ,800);
    });
    
    $('.js--scroll-section-1').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-1').offset().top} ,800);
    });
	
    $('.footer-logo').click(function () {
       $('html, body').animate({scrollTop: $('#page-top').offset().top} ,800);
    });
	
/* -------------------- END -------------------- */

 /* Animations on scroll elements */
	
	
	var waypoint;
	function handleWayPoint() {
		var $width = $(window).width();
		console.log($width);
		if($width > 750) {
			waypoint[0].enable();
		} else {
			waypoint[0].disable();
		}
  	}
	
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated');
    }, {
        offset: '50%'
    });
    $('.js--wp-1a').waypoint(function(direction) {
        $('.js--wp-1a').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    $('.js--wp-1b').waypoint(function(direction) {
        $('.js--wp-1b').addClass('animated bounceInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-1c').waypoint(function(direction) {
        $('.js--wp-1c').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    
	
	
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
	
/* -------------------- END -------------------- */
    
    
/* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('fas fa-bars')) {
            icon.addClass('far fa-window-close')/*.text(" Close")*/;
            icon.removeClass('fas fa-bars');
        } else {
            icon.addClass('fas fa-bars')/*.text(" Menu")*/;
            icon.removeClass('far fa-window-close');
        }        
    });
		
/* close menu */
    $('.nav ul li a').click(function() {
        if ($(window).width() <= 757) {  
            
            var navi = $('.header-nav');
        	var icon1 = $('.js--nav-icon i');
            
            navi.slideUp('header-nav');

    		if (icon1.hasClass('fas fa-bars')) {
                icon1.addClass('far fa-window-close');
                icon1.removeClass('fas fa-bars');
            } else {
                icon1.addClass('fas fa-bars');
                icon1.removeClass('far fa-window-close');
            }
        }   
    });
	
/* -------------------- END -------------------- */
	

//  ----- SECTION-2 GALLERY -----  //	
    $(".padding").click(function(){
        $(".section-2").addClass("intro");
    });/* add class on gallery */
	
	$(".section-2").mouseleave(function(){
        $(".section-2").removeClass("intro");
    });

/* -------------------- END -------------------- */
	
});



//  ----- TOP SCROLL BUTTON -----  //
window.onscroll = function() {ScrollFun()};

function ScrollFun() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scroll-top").style.display = "block";
    } else {
        document.getElementById("scroll-top").style.display = "none";
    }
}

// When the user clicks on the back to top button,it'll scroll to the top of the document smoothly
function TopFun() {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
}
/* -------------------- END -------------------- */



//  ----- LIGHTGALLERY -----  //
$(document).ready(function() {
  $('.lightgallery').lightGallery({
    pager: true
  });	
});
/* -------------------- END -------------------- */



//  ----- HEADER SLIDER -----  //
$(document).ready(function(){
  $('.slider').slider();
});
/* -------------------- END -------------------- */



//  ----- CHECKBOX -----  //

function getTransfer() {
	
	var prices_0 = document.getElementById("prices_0");
	var checks_0 = document.getElementsByClassName('checks_0');
	a_0 = 100;
	b_0 = 200;
	c_0 = 300;
	d_0 = 400;
	var x_0 = document.getElementById("tivat");
	var y_0 = document.getElementById("podgorica");
	var z_0 = document.getElementById("dubrovnik");
	var f_0 = document.getElementById("home");
	var rts = '';

	if ( checks_0[0].checked === true ) {
		rts = "€" + (a_0) + "<span>/ Starter</span>";
	} else {
		rts = "<span><img src='img/chbox/sl_3.png' class='checkImg'/></span> <span id='red'>. . . Please enter data!</span>";
	}
	if ( checks_0[1].checked === true ) {
		rts = "€" + (b_0) + "<span>/ The Best</span>";
	}
	if ( checks_0[2].checked === true ) {
		rts = "€" + (c_0) + "<span>/ Full</span>";
	}
	if ( checks_0[3].checked === true ) {
		rts = "€" + (d_0) + "<span>/ Full Extra</span>";
	}


	if ( checks_0[0].checked === true && checks_0[1].checked === true ) {
		rts = "€" + (a_0 + b_0) + "<span>/ The Best</span>";
	}
	if ( checks_0[0].checked === true && checks_0[2].checked === true ) {
		rts = "€" + (a_0 + c_0);
	}
	if ( checks_0[0].checked === true && checks_0[3].checked === true ) {
		rts = "€" + (a_0 + d_0) + "<span>/ Full Extra</span>";
	}
	if ( checks_0[1].checked === true && checks_0[2].checked === true ) {
		rts = "€" + (b_0 + c_0) + "<span>/ Full</span>";
	}
	if ( checks_0[1].checked === true && checks_0[3].checked === true ) {
		rts = "€" + (b_0 + d_0) + "<span>/ Full Extra</span>";
	}
	if ( checks_0[2].checked === true && checks_0[3].checked === true ) {
		rts = "€" + (c_0 + d_0) + "<span>/ Full Extra</span>";
	}
	if ( checks_0[0].checked === true && checks_0[1].checked === true && checks_0[2].checked === true ) {
		rts = "€" + (a_0 + b_0 + c_0) + "<span>/ Full</span>";
	} 
	if ( checks_0[0].checked === true && checks_0[1].checked === true && checks_0[3].checked === true ) {
		rts = "€" + (a_0 + b_0 + d_0) + "<span>/ Full Extra</span>";
	}
	if ( checks_0[0].checked === true && checks_0[2].checked === true && checks_0[3].checked === true ) {
		rts = "€" + (a_0 + c_0 + d_0) + "<span>/ Full Extra</span>";
	}
	if ( checks_0[1].checked === true && checks_0[2].checked === true && checks_0[3].checked === true ) {
		rts = "€" + (b_0 + c_0 + d_0) + "<span>/ Full Extra</span>";
	} 
	if ( checks_0[0].checked === true && checks_0[1].checked === true && checks_0[2].checked === true && checks_0[3].checked === true ) {
		rts = "€" + (a_0 + b_0 + c_0 + d_0) + "<span>/ Full Extra</span>";
	}
	
	prices_0.innerHTML = rts;
}

$(document).ready(function(){
	
	$('#tivat').change(function(){
		if($(this).is(":checked")) {
			$('.tivat').addClass('startColor');
		} else {
			$('.tivat').removeClass('startColor');
		}
	});
	
	$('#podgorica').change(function(){
		if($(this).is(":checked")) {
			$('.podgorica').addClass('startColor');
		} else {
			$('.podgorica').removeClass('startColor');
		}
	});
	
	$('#dubrovnik').change(function(){
		if($(this).is(":checked")) {
			$('.dubrovnik').addClass('startColor');
		} else {
			$('.dubrovnik').removeClass('startColor');
		}
	});
	
	$('#home1').change(function(){
		if($(this).is(":checked")) {
			$('.home1').addClass('startColor');
		} else {
			$('.home1').removeClass('startColor');
		}
	});
	
});

function changeFunc(){
	// Učitavanje vrednosti koje je korisnik uneo preko padajuče liste
	var rates = document.getElementById('airport').value;
	var airport = document.getElementsByClassName('airport');

	if (rates == "Dubrovnik") {
		document.getElementById('dubrovnik').checked = true;
		document.getElementById('podgorica').checked = false;
		document.getElementById('tivat').checked = false;

	} else if (rates == "Podgorica") {
		document.getElementById('dubrovnik').checked = false
		document.getElementById('podgorica').checked = true;
		document.getElementById('tivat').checked = false;

	} else if (rates == "Tivat") {
		document.getElementById('dubrovnik').checked = false;
		document.getElementById('podgorica').checked = false;
		document.getElementById('tivat').checked = true;
	}	
	
}
// --- END --- //

function getRafting() {
	
	var prices_1 = document.getElementById("prices_1");
	var checks_1 = document.getElementsByClassName('checks_1');
	a_1 = 20;
	b_1 = 30;
	c_1 = 50;
	d_1 = 400;
	var x_1 = document.getElementById("bike");
	var y_1 = document.getElementById("car");
	var z_1 = document.getElementById("boat");
	var f_1 = document.getElementById("home");
	var trs = '';

	if ( checks_1[0].checked === true ) {
		trs = "€" + (a_1) + "<span>/ Starter</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	} else {
		trs = "<span><img src='img/chbox/sl_2.png' class='checkImg'/></span> <span id='red'> . . . Please enter data!</span>";
	}
	if ( checks_1[1].checked === true ) {
		x_1.checked = true;
		trs = "€" + (b_1) + "<span>/ The Best</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[2].checked === true ) {
		x_1.checked = true;
		y_1.checked = true;
		trs = "€" + (c_1) + "<span>/ Full</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[3].checked === true ) {
		x_1.checked = true;
		y_1.checked = true;
		z_1.checked = true;
		trs = "€" + (d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}


	if ( checks_1[0].checked === true && checks_1[1].checked === true ) {
		trs = "€" + (a_1 + b_1) + "<span>/ The Best</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[0].checked === true && checks_1[2].checked === true ) {
		trs = "€" + (a_1 + c_1) + "<span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[0].checked === true && checks_1[3].checked === true ) {
		trs = "€" + (a_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[1].checked === true && checks_1[2].checked === true ) {
		trs = "€" + (b_1 + c_1) + "<span>/ Full</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[1].checked === true && checks_1[3].checked === true ) {
		trs = "€" + (b_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[2].checked === true && checks_1[3].checked === true ) {
		trs = "€" + (c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[0].checked === true && checks_1[1].checked === true && checks_1[2].checked === true ) {
		trs = "€" + (a_1 + b_1 + c_1) + "<span>/ Full</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	} 
	if ( checks_1[0].checked === true && checks_1[1].checked === true && checks_1[3].checked === true ) {
		trs = "€" + (a_1 + b_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[0].checked === true && checks_1[2].checked === true && checks_1[3].checked === true ) {
		str = "€" + (a_1 + c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	if ( checks_1[1].checked === true && checks_1[2].checked === true && checks_1[3].checked === true ) {
		trs = "€" + (b_1 + c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	} 
	if ( checks_1[0].checked === true && checks_1[1].checked === true && checks_1[2].checked === true && checks_1[3].checked === true ) {
		trs = "€" + (a_1 + b_1 + c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_4.png' class='checkImg right'/></span>";
	}
	
	prices_1.innerHTML = trs;
}

$(document).ready(function(){
	
	$('#bike').change(function(){
		if($(this).is(":checked")) {
			$('.bike').addClass('startColor');
		} else {
			$('.bike').removeClass('startColor');
		}
	});
	
	$('#car').change(function(){
		if($(this).is(":checked")) {
			$('.car').addClass('startColor');
			$('.bike').addClass('startColor');
		} else {
			$('.car').removeClass('startColor');
		}
	});
	
	$('#boat').change(function(){
		if($(this).is(":checked")) {
			$('.boat').addClass('startColor');
			$('.car').addClass('startColor');
			$('.bike').addClass('startColor');
		} else {
			$('.boat').removeClass('startColor');
		}
	});
	
	$('#home').change(function(){
		if($(this).is(":checked")) {
			$('.home').addClass('startColor');
			$('.bike').addClass('startColor');
			$('.car').addClass('startColor');
			$('.boat').addClass('startColor');
		} else {
			$('.home').removeClass('startColor');
		}
	});
	
});	
// --- END --- //

function getTurist() {
	
	var prices_2 = document.getElementById("prices_2");
	var checks_2 = document.getElementsByClassName('checks_2');
	a_1 = 10;
	b_1 = 20;
	c_1 = 30;
	d_1 = 40;
	var x_1 = document.getElementById("mountain");
	var y_1 = document.getElementById("lake");
	var z_1 = document.getElementById("river");
	var f_1 = document.getElementById("sea");
	var str = '';

	if ( checks_2[0].checked === true ) {
		str = "€" + (a_1) + "<span>/ Starter</span>";
	} else {
		str = "<span><img src='img/chbox/sl_3.png' class='checkImg'/></span> <span id='red'>. . . Please enter data!</span>";
	}
	if ( checks_2[1].checked === true ) {
		x_1.checked = true;
		str = "€" + (b_1) + "<span>/ The Best</span>";
	}
	if ( checks_2[2].checked === true ) {
		//x_1.checked = true;
		//y_1.checked = true;
		str = "€" + (c_1) + "<span>/ Full</span>";
	}
	if ( checks_2[3].checked === true ) {
		//x_1.checked = true;
		//y_1.checked = true;
		//z_1.checked = true;
		str = "€" + (d_1) + "<span>/ Full Extra</span>";
	}


	if ( checks_2[0].checked === true && checks_2[1].checked === true ) {
		str = "€" + (a_1 + b_1) + "<span>/ The Best</span>" ;
	}
	if ( checks_2[0].checked === true && checks_2[2].checked === true ) {
		str = "€" + (a_1 + c_1);
	}
	if ( checks_2[0].checked === true && checks_2[3].checked === true ) {
		str = "€" + (a_1 + d_1) + "<span>/ Full Extra</span>";
	}
	if ( checks_2[1].checked === true && checks_2[2].checked === true ) {
		str = "€" + (b_1 + c_1) + "<span>/ Full</span>";
	}
	if ( checks_2[1].checked === true && checks_2[3].checked === true ) {
		str = "€" + (b_1 + d_1) + "<span>/ Full Extra</span>";
	}
	if ( checks_2[2].checked === true && checks_2[3].checked === true ) {
		str = "€" + (c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_1.png' class='checkImg right'/></span>";
	}
	if ( checks_2[0].checked === true && checks_2[1].checked === true && checks_2[2].checked === true ) {
		str = "€" + (a_1 + b_1 + c_1) + "<span>/ Full</span>";
	} 
	if ( checks_2[0].checked === true && checks_2[1].checked === true && checks_2[3].checked === true ) {
		str = "€" + (a_1 + b_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_1.png' class='checkImg right'/></span>";
	}
	if ( checks_2[0].checked === true && checks_2[2].checked === true && checks_2[3].checked === true ) {
		str = "€" + (a_1 + c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_1.png' class='checkImg right'/></span>";
	}
	if ( checks_2[1].checked === true && checks_2[2].checked === true && checks_2[3].checked === true ) {
		str = "€" + (b_1 + c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_1.png' class='checkImg right'/></span>";
	} 
	if ( checks_2[0].checked === true && checks_2[1].checked === true && checks_2[2].checked === true && checks_2[3].checked === true ) {
		str = "€" + (a_1 + b_1 + c_1 + d_1) + "<span>/ Full Extra</span> <span><img src='img/chbox/sl_5.png' class='checkImg right'/></span>";
	}
	
	prices_2.innerHTML = str;
}

$(document).ready(function(){
	
	$('#mountain').change(function(){
		if($(this).is(":checked")) {
			$('.mountain').addClass('startColor_2');
		} else {
			$('.mountain').removeClass('startColor_2');
		}
	});
	
	$('#lake').change(function(){
		if($(this).is(":checked")) {
			$('.lake').addClass('startColor_2');
			$('.lake').addClass('section-6-content ul. liColor');
			$('.mountain').addClass('startColor_2');
			$('.mountain').addClass('section-6-content ul. liColor');
		} else {
			$('.lake').removeClass('startColor_2');
			$('.lake').removeClass('section-6-content ul. liColor');
			$('.mountain').removeClass('section-6-content ul. liColor');
		}
	});
	
	$('#river').change(function(){
		if($(this).is(":checked")) {
			$('.river').addClass('startColor_2');
		} else {
			$('.river').removeClass('startColor_2');
		}
	});
	
	$('#sea').change(function(){
		if($(this).is(":checked")) {
			$('.sea').addClass('startColor_2');
		} else {
			$('.sea').removeClass('startColor_2');
		}
	});
	
});	
/* -------------------- END -------------------- */












