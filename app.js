// Generated by CoffeeScript 1.6.3
(function() {
  $("document").ready(function() {
    return $(".nav.nav-tabs a").click(function(e) {
      console.log(e.target.hash);
      window.scrollTo(0, $(e.target.hash).offset().top);
      return $(this).tab('show');
    });
  });

}).call(this);
