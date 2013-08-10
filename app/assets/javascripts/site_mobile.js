// ===========================
// Lettering.js
// ===========================

$(document).ready(function() {
  $(".logo").lettering();
});


// ===========================
// Anystretch
// ===========================

$('#photo-hero').anystretch("assets/pics/smush_silhouette-320-maximum.jpg", {speed: 200, positionY: 'top'});
$('#in-person').anystretch("assets/smush_map-320.png", {speed: 200, positionY: 'top'});


// ===========================
// Adjust Arrow Location
// ===========================

$(document).ready(function () {
    var windowHeight, headHeight, heroHeight, expertiseHeight;

    function init() {
        windowHeight = $(window).height();
        headHeight = $('#home').height();
        arrowHeight = $('#photo-hero .scroll').height();
        heroHeight = $('#photo-hero').outerHeight();
        expertiseHeight = $('#expertise').outerHeight();

        // FIXME ccm: Why doesn't this work properly on resize?
        // $('#photo-hero .scroll').css('top', windowHeight - (arrowHeight + headHeight));
        // $('#expertise .scroll').css('top', windowHeight - (arrowHeight - 10))

        if (heroHeight + headHeight > windowHeight) {
            $('#photo-hero .scroll').css('top', windowHeight - 110);
        }
        if (expertiseHeight > windowHeight) {
            $('#expertise .scroll').css('top', windowHeight - 60)
        };
    }
    init();
    $(window).resize(function () {

        init();
    });
})


// ===========================
// Remove Anchor Outline
// ===========================

// http://stackoverflow.com/questions/1535538/jquery-getting-rid-of-dotted-outline-around-buttons

$(function() {
    $('.autoblur').live("click", function(event) {
        this.blur();
    });
});


// ===========================
// Smooth Scroll
// ===========================

$(document).ready(function() {

  $('.scroll').click(function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      speed: 1000,
      scrollTarget: link.hash
    });
  });

});


// ===========================
// show Hide
// ===========================

// http://papermashup.com/jquery-show-hide-plugin/

//= require showHide

// $(document).ready(function(){

//   $('.show_hide').showHide({
//     speed: 1000,             // speed you want the toggle to happen
//     easing: '',              // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
//     changeText: 1,           // if you dont want the button text to change, set this to 0
//     showText: 'Read More',   // the button text to show when a div is closed
//     hideText: 'Less'         // the button text to show when a div is open
//   });

// });


// ===========================
// Google Maps API
// ===========================

// $(document).ready(function(){

//   $('#map').gmap3({

//     map:{
//       options:{
//         center:[26.7084, -80.0565],
//         zoom:15,
//         backgroundColor:'none',
//         mapTypeControl: true,
//         mapTypeControlOptions: {
//           style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
//         },
//         navigationControl: true,
//         scrollwheel: true,
//         streetViewControl: true
//       }
//     },

//     marker:{
//       values:[
//         {latLng:[26.7084, -80.0565], data: "Let's Meet! We would love to hear all about your project and see how we can help."}
//       ],
//       options:{
//         draggable: false
//       },
//       events:{
//         click: function(marker, event, context){
//           var map = $(this).gmap3("get"),
//             infowindow = $(this).gmap3({get:{name:"infowindow"}});
//           if (infowindow){
//             infowindow.open(map, marker);
//             infowindow.setContent(context.data);
//           } else {
//             $(this).gmap3({
//               infowindow:{
//                 anchor:marker,
//                 options:{content: context.data}
//               }
//             });
//           }
//         }
//       }
//     }
//   });

// });
