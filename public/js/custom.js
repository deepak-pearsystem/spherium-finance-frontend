// $( document ).ready(function() {
//    alert('hello');
// });

//document.getElementById('myVideo').play();

var autoPlayVideo = document.getElementById("ocScreencapVideo");
    autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();
}

$(document).ready(function() {
    var owl = $('.latestblog-carousel');
    owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 1000,
      autoplayHoverPause: true
    });
    $('.play').on('click', function() {
      owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
      owl.trigger('stop.owl.autoplay')
    })
})