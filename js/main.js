$(document).ready(function() {
  $('a[href^="#"]').on("click", function(event) {
    var target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });
});

// window.sr = ScrollReveal();

// sr.reveal("#animation", {
//   duration: 2000
// });

// sr.reveal("#prizeList", {
//   duration: 2000
// });

// sr.reveal("#contact", {
//   duration: 2000
// });
