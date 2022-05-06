fetch('https://api.github.com/users/yuriy-kulakovskyi')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  $('#github__image').css('background-image', 'url('+ data.avatar_url +')');
  $("#name__username").text(data.name);
  $("#name__nickname").text(data.login);
})