
var barswitch = true;

$(window).scroll(function () {
    
    var topDivHeight = $(".home-hero").height();
    var viewPortSize = $(window).height();

    var triggerAt = 0;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= $(".home-hero").height()) {
        $(".about").css('background-color','gold');
        //$(this).off('scroll');
    }
});

$(window).scroll(function () {
    
    var topDivHeight = $(".stats").height();
    var viewPortSize = $(window).height();

    var triggerAt = 0;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= $(".stats").height() + 700) {
        $(".stats").css('background-position','right bottom');
        //$(this).off('scroll');
        if (barswitch == true){
        $(function() {
  			$("#bars li .bar").each( function( key, bar ) {
    		var percentage = $(this).data('percentage');
    
    	$(this).animate({
      		'height' : percentage + '%'
    	}, 1000);
  });
});}
        barswitch = false;
    }
});

$(window).scroll(function () {
    
    var topDivHeight = $(".stats-info").height();
    var viewPortSize = $(window).height();

    var triggerAt = 0;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() - viewPortSize >= $(".stats-info").height() + $(".about").height()) {


        $(".c1").css('opacity','1');

        //$(this).off('scroll');
    }

    if ($(window).scrollTop() - viewPortSize >= $(".stats-info").height() + $(".about").height() + 70) {
        $(".c2").css('opacity','1');
        //$(this).off('scroll');
    }

    if ($(window).scrollTop() - viewPortSize >= $(".stats-info").height() + $(".about").height() + 140) {
        $(".c3").css('opacity','1');
        //$(this).off('scroll');
    }
});

$(window).scroll(function () {
    
    var topDivHeight = $(".stats-info").height();
    var viewPortSize = $(window).height();

    var triggerAt = 0;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() - viewPortSize >= $(".stats-info").height() + $(".about").height() + $(".all-stoppages").height()) {


        $("#all-ko-trigger").attr("class", "all-ko");
        $("#all-sub-trigger").attr("class", "all-sub");
    }

    if ($(window).scrollTop() - viewPortSize >= $(".stats-info").height() + $(".about").height() + $(".finishes").height()) {


        $("#hw-ko-trigger").attr("class", "hw-ko");
        $("#hw-sub-trigger").attr("class", "hw-sub");
        $("#lw-ko-trigger").attr("class", "lw-ko");
        $("#lw-sub-trigger").attr("class", "lw-sub");
        $("#sw-ko-trigger").attr("class", "sw-ko");
        $("#sw-sub-trigger").attr("class", "sw-sub");
    }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});