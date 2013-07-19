// Lettering.js

$(document).ready(function() {
  $(".logo").lettering();
});


// bgStretcher callback

mycallBack = function(){
  var $one   = $('.one');
  var $two   = $('.two');
  var $three = $('.three');
  var $four  = $('.four');

  if ($one.is(':visible')){
      $one.fadeOut(500);
      $two.delay(1500).fadeIn(1500);
  }
  else if ($two.is(':visible')){
      $two.fadeOut(500);
      $three.delay(1500).fadeIn(1500);
  }
  else if ($three.is(':visible')){
      $three.fadeOut(500);
      $four.delay(1500).fadeIn(1500);
  }
  else{
      $four.fadeOut(500);
      $one.delay(1500).fadeIn(1500);
  }
  // console.log("callback");
}

// bgStretcher

$(document).ready(function(){

  $('#quote').bgStretcher({
    images: ['assets/pics/silhouette-1024-maximum.jpg', 'assets/pics/drain-1024-maximum.jpg', 'assets/pics/lake-titicaca-1024-maximum.jpg', 'assets/pics/rainbow-1024-maximum.jpg'],
    imageWidth: 1024,
    imageHeight: 682,
    slideDirection: 'N',
    nextSlideDelay: 10000,
    slideShowSpeed: 1500,
    transitionEffect: 'fade',
    sequenceMode: 'normal',
    buttonPrev: '#prev',
    buttonNext: '#next',
    pagination: '#controls',
    anchoring: 'center center',
    anchoringImg: 'center center',
    callbackfunction: mycallBack
  });

});


// Remove link dotted line

// http://stackoverflow.com/questions/1535538/jquery-getting-rid-of-dotted-outline-around-buttons

$(function() {
    $('.autoblur').live("click", function(event) {
        this.blur();
    });
});


// Magic Line

// http://css-tricks.com/jquery-magicline-navigation/

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#nav"),

        // http://stackoverflow.com/questions/590602/padding-or-margin-value-in-pixels-as-integer-using-jquery
        $current = $(".active"),
        // paddingLeft = $current.css("padding-left"),
        // paddingLeft = parseInt($current.css("padding-top").replace("px","")),
        paddingBoth = ($current.innerWidth() - $current.width()),
        paddingLeft = paddingBoth / 2;

    $mainNav.append("<span id='magic-line'></span>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($current.width())
        .css("left", $current.position().left + paddingLeft)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width() + paddingBoth;
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
});


// show Hide

// http://papermashup.com/jquery-show-hide-plugin/

$(document).ready(function(){

  $('.show_hide').showHide({
    speed: 1000,  // speed you want the toggle to happen
    easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
    changeText: 1, // if you dont want the button text to change, set this to 0
    showText: 'Read More',// the button text to show when a div is closed
    hideText: 'Less' // the button text to show when a div is open
  });

});


// Typekit

$(function() {
  // As soon as the DOM is ready, make invisible
  $(document).ready(function() {
    $('.logo').css('visibility', 'hidden');
  });

  // Load the fonts
  try {
    Typekit.load({
      active: function() {
        // As soon as the fonts are active, fade in
        // Don't fade in browsers that don't do proper opacity, like IE
        if (jQuery.support.opacity) {
          $('.logo').css('visibility', 'visible').hide().fadeIn();
        } else {
          $('.logo').css('visibility', 'visible');
        }
      },
      inactive: function() {
        // If the fonts are inactive, just show
        // You can apply fallback styles using the wf-inactive class in your CSS
        $('.logo').css('visibility', 'visible');
      }
    })
  } catch(e) {}
})();
