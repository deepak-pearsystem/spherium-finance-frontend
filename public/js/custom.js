// $( document ).ready(function() {
//    alert('hello');
// });

//document.getElementById('myVideo').play();


$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$( document ).ready(function() {
$('.innews-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  responsive:{
      0:{
          items:1,
          dots:false,
          autoplay:true
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
}) 
});

var autoPlayVideo = document.getElementById("ocScreencapVideo");
    autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();
}

// $(".navbar-nav .nav-item").on("click", function() {
//   $(".nav-item").removeClass("active");
//   $(this).addClass("active");
// });







// $(document).ready(function() {
//   var owl = $('.latestblog-carousel');
//   owl.owlCarousel({
//     items: 3,
//     loop: true,
//     margin: 30,
//     autoplay: false,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true
//   });
//   $('.play').on('click', function() {
//     owl.trigger('play.owl.autoplay', [1000])
//   })
//   $('.stop').on('click', function() {
//     owl.trigger('stop.owl.autoplay')
//   })
// })



