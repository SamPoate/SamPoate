$(document).on("scroll", function(e) {
  var scrollCount = $(document).scrollTop();
  var translateSpeed = 4; //lower is slower

  $(".top-logo").css(
    "transform",
    "translateX(-" + scrollCount * translateSpeed + "px)"
  );
  $(".bottom-logo").css(
    "transform",
    "translateX(" + scrollCount * translateSpeed + "px)"
  );
});

$(document).on("scroll", function(e) {
  if ($(document).scrollTop() >= 500) {
    $("#content").css("z-index", "1");
  } else {
    $("#content").css("z-index", "-1");
  }
});
