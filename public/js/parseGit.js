let nickname1 = localStorage.getItem('nickname');
let username = localStorage.getItem('username');
let name = localStorage.getItem('name');


$("#gitSignIn").click(() => {
  $("#git__auth").css("display", 'flex');
  $("#authPage").css("filter", 'blur(10px)');
  let nickname = '';
  $("#confirm").click(() => {
    if ($("#git__nick").val() != '') {
      nickname = $("#git__nick").val();
      $("#git__auth").css("display", 'none');
      localStorage.setItem("typednick", nickname);
      localStorage.setItem("gitClick", 'true');

      $("#authPage").css("display", 'none');
      $("#signIn").css("display", 'none');
      $("#form_wrapper").css("display", 'none');
      $("#wrapper__auth-form").css("display", 'flex');

      $("#git__auth").css("display", 'none');
      $("#authPage").css("filter", 'blur(0)');

      fetch('https://api.github.com/users/' + nickname)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        $('#github__image').css('background-image', 'url('+ data.avatar_url +')');
        $("#name__username").text(data.name);
        $("#name__nickname").text(data.login);
        $("#name").text(data.name);
      })
    }
  });
});

$("#cross").click(() => {
  $("#git__auth").css("display", 'none');
  $("#authPage").css("filter", 'blur(0)');
});

if (localStorage.getItem("gitClick") === 'true') {
  fetch('https://api.github.com/users/' + localStorage.getItem("typednick"))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    $('#github__image').css('background-image', 'url('+ data.avatar_url +')');
    $("#name__username").text(data.name);
    $("#name__nickname").text(data.login);
    $("#name").text(data.name);

    localStorage.setItem("ava_url", data.avatar_url);
    localStorage.setItem("userName", data.name);
    localStorage.setItem("firstName", data.login);
    localStorage.setItem("location", data.location);
    localStorage.setItem("bio", data.bio);
    
    $("#authPage").css("display", 'none');
    $("#signIn").css("display", 'none');
    $("#form_wrapper").css("display", 'none');
    $("#wrapper__auth-form").css("display", 'flex');
  })

  $('#github__image').css('background-image', 'url('+ localStorage.getItem("ava_url") +')');
  $("#name__username").text(username);
  $("#name__nickname").text(nickname1);
  $("#name").text(name);
}