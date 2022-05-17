$("#enter__button").click(() => {
  $("#wrapper__auth-form").hide();
  $(".wrapper__admin__panel").css('display', 'flex');
  setTimeout(() => {
    $(".wrapper__admin__panel").css('--scale', '1');
  }, 0.000001)
});