$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    // $('.parallax').parallax();
    $('.tap-target').tapTarget();
    $('.tooltipped').tooltip();



    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('nav').addClass('white');
            // $('#brandLogoPic').animate({
            //     width: "13rem"
            // }, 500, function () {
            //     console.log('completed animation');
            // });
        } else {
            $('nav').removeClass('white');
            // $('#brandLogoPic').animate({
            //     width: "15rem"
            // }, 500, function () {
            //     console.log('completed animation');
            // });
        }
    })
  });
  