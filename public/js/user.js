$("#avatar").css("background-image", 'url('+ localStorage.getItem("ava_url") +')');
$("#location").text(localStorage.getItem("location"));
$("#country").html('<i style="margin-right: 5px" class="fas fa-map-marker-alt front-icons"></i>' + localStorage.getItem("location"));
$("#username").html('<i style="margin-right: 10px" class="fas fa-user"></i>' + localStorage.getItem("firstName"));

$("#bio").text(localStorage.getItem("bio"));

if (localStorage.getItem("sex") === null) {
  $("#sex").html("<i style='margin-right: 10px' class='fas fa-solid fa-child'></i> ?");
} else {
  $("#sex").html("<i style='margin-right: 10px' class='fas fa-solid fa-child'></i>" + localStorage.getItem("sex"));
}

if (localStorage.getItem("email") === null) {
  $("#email").html("<i style='margin-right: 10px' class='fas fa-solid fa-envelope'></i> ?");
} else {
  $("#email").html("<i style='margin-right: 10px' class='fas fa-solid fa-envelope'></i>" + localStorage.getItem("email"));
}