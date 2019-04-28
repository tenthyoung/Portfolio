$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    // $('.parallax').parallax();
    $('.tap-target').tapTarget();
    $('.tooltipped').tooltip();



    $(window).scroll(function() {
        if ($(window).scrollTop() > 5 || document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 ) {
            $('nav').addClass('white');
            $('#brandLogoPic').animate({
                width: "14.5rem"
            }, 15, "linear", function () {
                console.log('completed animation');
            });
        } else {
            $('nav').removeClass('white');
            $('#brandLogoPic').animate({
                width: "15rem"
            }, 15, "linear", function () {
                console.log('completed animation');
            });
        }
    })
  });
  