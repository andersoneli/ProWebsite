
  (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 66
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);

// Get the modal
var modal = document.getElementById("cookieModal");

// Get the close button
var closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on the close button, hide the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// When the page is loaded, show the modal if the cookie is not set
window.onload = function() {
  if (document.cookie.indexOf("acceptedCookies=true") < 0) {
    modal.style.display = "block";
  }
}

// When the user clicks the accept button, set a cookie and hide the modal
var acceptButton = document.getElementById("acceptCookies");
acceptButton.onclick = function() {
  document.cookie = "acceptedCookies=true; expires=Thu, 31 Dec 2099 23:59:59 GMT; path=/";
  modal.style.display = "none";
}


  
