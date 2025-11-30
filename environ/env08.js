

$(document).mousemove(function(event) {
  $("#parvenuPeak").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});