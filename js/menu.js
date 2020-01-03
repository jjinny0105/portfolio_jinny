$("#triger").click(function() {
  $("#desktopMenu").addClass("on");

  $("#m_gnb_close").click(function() {
    $("#desktopMenu").removeClass("on");
  });
});
