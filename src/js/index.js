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
    
    const _body = $('body');

    $('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.nav-layer').toggleClass('open');
        _body.toggleClass('scroll');
	});
    

    $('.send-form-toggle').click(function(e){
        e.preventDefault();
		$('.order').toggleClass('open');
        _body.toggleClass('scroll');
	});

    $('.order__close').click(function(e){
        e.preventDefault();
		$('.order').toggleClass('open');
        _body.toggleClass('scroll');
	});

    $('a.nav__link[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('.nav-layer').removeClass('open');
        $('#nav-icon4').removeClass('open');

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });

    $('[data-fancybox]').fancybox({
        touch: {
            vertical: false, // Allow to drag content vertically
            momentum: false // Continue movement after releasing mouse/touch when panning
        }
    });

    $('.slick-clients').slick({
        infinite: false,
        dots: true,
        customPaging : function(slider, i) {
            var number = $(slider.$slides[i].children[0].children[0]).data('number');
            return '<div><b>'+number+'</b> &mdash; 03</div>';
        }
    });

    $('.slick-howitworks').slick({
        infinite: false,
        dots: true,
        customPaging : function(slider, i) {
            var number = $(slider.$slides[i].children[0].children[0]).data('number');
            return '<div><b>'+number+'</b> &mdash; 04</div>';
        }
    });

    $('.slick-menu').slick({
        infinite: false,
        dots: true,
        customPaging : function(slider, i) {
            var number = $(slider.$slides[i].children[0].children[0]).data('number');
            return '<div><b>'+number+'</b> &mdash; 12</div>';
        }
    });

    
    $('#send-form input').bind('keyup blur click', function () { 
        if ($('#send-form').validate().checkForm()) {                   
            $('#send-submit').removeClass('button_disabled').prop('disabled', false); 
        } else {
            $('#send-submit').addClass('button_disabled').prop('disabled', true);
        }
    });

    $('#popup-send-form input').bind('keyup blur click', function () { 
        if ($('#popup-send-form').validate().checkForm()) {                   
            $('#popup-send-submit').removeClass('button_disabled').prop('disabled', false); 
        } else {
            $('#popup-send-submit').addClass('button_disabled').prop('disabled', true);
        }
    });

    $('.fb').on('click', function(e) {
        fbq('track', 'Lead')
    });

    $('#send-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            dataType: 'json',
            type: $(this).attr('method'),
            success: function(data) {
                if(data.status == 'ok') {
                    //console.log('form 2 ok');
                    window.location.replace("/success.php");
                    //$('#form2-ok').show();
                    //fbq('track', 'Lead');
                } 
            },
            
        });
    });

    $('#popup-send-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            dataType: 'json',
            type: $(this).attr('method'),
            success: function(data) {
                if(data.status == 'ok') {
                    //console.log('form 2 ok');
                    window.location.replace("/success.php");
                    //$('#form2-ok').show();
                    //fbq('track', 'Lead');
                } 
            },
            
        });
    });

    // $('.sendForm').on('submit', function(e){
    //     e.preventDefault();
        
    //     if ( $(this).validate().checkForm() ) {
    //         $.ajax({
    //             url: $(this).attr('action'),
    //             data: $(this).serialize(),
    //             dataType: 'json',
    //             type: $(this).attr('method'),
    //             success: function(data) {
    //                 if(data.status == 'ok') {
    //                     console.log('submitted');
    //                     $.fancybox.close();
    //                     $.fancybox.open({ 
    //                         src: '#thanks',
    //                         baseClass: 'popup-transparent'
    //                     });
    //                 } else {
    //                     console.log('fail');
    //                 }
    //             },
    //             error: function() {
    //                 console.log('error');
    //                 $.fancybox.open('<div class="message"><h2>Oops!</h2><p>Something went wrong</p></div>');
    //             }
    //         });
    //     }
    //     else {
    //         console.log('fail');
    //     }
    // });

    //    
});