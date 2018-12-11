// Menu-toggle button

$(document).ready(function() {
      
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });

      $(".wrapper").on("click" ,function(){
            $("html, body").animate({ scrollTop: "950px" });
      });

      
      
});

// Scrolling Effect

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
            $('nav ul li a').addClass('white');
      }

      else {
            $('nav').removeClass('black');
            $('nav ul li a').removeClass('white');
      }
})

