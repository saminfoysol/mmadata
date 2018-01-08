$(function() {
  $("#bars li .bar").each( function( key, bar ) {
    var percentage = $(this).data('percentage');
    
    $(this).animate({
      'height' : percentage + '%'
    }, 1000);
  });
});

//setTimeout(function(){ $("body").css('transition','all 1s ease'); },1000)
//setTimeout(function(){ $("body").css('background-position','right bottom'); },2000)

