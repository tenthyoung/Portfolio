$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.parallax').parallax();
    $('.tap-target').tapTarget();
    $('.tooltipped').tooltip();



    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    })
  });
  