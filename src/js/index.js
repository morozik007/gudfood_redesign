var $ = require("jquery");
window.jQuery = $;
import 'slick-carousel';
//require("inputmask");
//import Inputmask from "inputmask";
require("@fancyapps/fancybox");
require("jquery-validation");
//import popper from 'popper.js';
//import bootstrap from 'bootstrap';

// var selector = document.getElementById("phone");
// var im = new Inputmask({"mask": "+38(999)999-99-99"});
// im.mask(selector);

$(function() {

    console.log('works');
    

    $('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.nav-layer').toggleClass('open');
	});

    $('a.navigation__link[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('.menu-toggle').toggleClass('active');
        $('.navigation').toggleClass('open');

        $('html, body').animate({
            'scrollTop': $target.offset().top-80
        }, 1000, 'swing');
    });

    $('[data-fancybox]').fancybox({
        touch: {
            vertical: false, // Allow to drag content vertically
            momentum: false // Continue movement after releasing mouse/touch when panning
        }
    });

    $('.oppo__slider').slick();
    $('.video__slider').slick({
        dots: true
    });

    //$('#phone').inputmask({"mask": "+38(999)999-99-99"});
    // $("#first-try-form").validate();
    // $("#second-try-form").validate();
    $("#popup-try-form").validate(
        // rules:{
        //     phoneUS:
        //     {
        //     required:true,
        //     phoneUS:true
        //     }
        // }
    );

    // $.validator.addMethod( "phoneUS", function( phone_number, element ) {
    //     return phone_number.match(/^\+[1-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/)
    // }, "Please specify a valid phone number" );

    // $('#first-try-form input').on('submit', function(e) {
    //     e.preventDefault();
    //     // if ($(this).validate().checkForm()) {                   
    //     //     $(this).submit();
    //     // } else {
    //     //     console.log('fail');
    //     // }
    // })

    // $('#first-try-form input').bind('keyup blur click', function () { 
    //     if ($('#first-try-form').validate().checkForm()) {                   
    //         $('#first-try-submit').removeClass('button_disabled').prop('disabled', false); 
    //     } else {
    //         $('#first-try-submit').addClass('button_disabled').prop('disabled', true);
    //     }
    // });

    // $('#second-try-form input').bind('keyup blur click', function () { 
    //     if ($('#second-try-form').validate().checkForm()) {                   
    //         $('#second-try-submit').removeClass('button_disabled').prop('disabled', false); 
    //     } else {
    //         $('#second-try-submit').addClass('button_disabled').prop('disabled', true);
    //     }
    // });

    // $('#popup-try-form input').bind('keyup blur click', function () { 
    //     if ($('#popup-try-form').validate().checkForm()) {                   
    //         $('#popup-try-submit').removeClass('button_disabled').prop('disabled', false); 
    //     } else {
    //         $('#popup-try-submit').addClass('button_disabled').prop('disabled', true);
    //     }
    // });

    $('.sendForm').on('submit', function(e){
        e.preventDefault();
        
        if ( $(this).validate().checkForm() ) {
            $.ajax({
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: 'json',
                type: $(this).attr('method'),
                success: function(data) {
                    if(data.status == 'ok') {
                        console.log('submitted');
                        $.fancybox.close();
                        $.fancybox.open({ 
                            src: '#thanks',
                            baseClass: 'popup-transparent'
                        });
                    } else {
                        console.log('fail');
                    }
                },
                error: function() {
                    console.log('error');
                    $.fancybox.open('<div class="message"><h2>Oops!</h2><p>Something went wrong</p></div>');
                }
            });
        }
        else {
            console.log('fail');
        }
    });

    //    
});