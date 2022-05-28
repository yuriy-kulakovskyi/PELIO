let checked = false;
$("#profile__switch svg").click(() => {
  if (!checked) {
    $("#switch__menu").css("display", 'flex');
    checked = true;
  } else if (checked) {
    $("#switch__menu").css("display", 'none');
    checked = false;
  }
});

$("#switch__menu").click(() => {
  $(this).css('display', 'none');
  $("#admin__panel").css("display", 'none');
  $("#signIn").css("display", 'flex');
  $("#authPage").css("display", 'flex');
  localStorage.setItem("loggined", 'false');
  localStorage.setItem("gitClick", 'false');
})

$("#signInBtn").click(() => {
  $("#form_wrapper").css("display", 'none');
  $("#signIn").css("display", 'flex');
});

$("#signUpBtn").click(() => {
  $("#form_wrapper").css("display", 'flex');
  $("#signIn").css("display", 'none');
});

if (localStorage.getItem("loggined") === 'true' ||
    localStorage.getItem("gitClick") === 'true') {
  $("#authPage").css("display", 'none');
  $("#signIn").css("display", 'none');
  $("#form_wrapper").css("display", 'none');
  $("#wrapper__auth-form").css("display", 'flex');
} else {
  $("#authPage").css("display", 'flex');
  $("#signIn").css("display", 'none');
  $("#form_wrapper").css("display", 'flex');
  $("#wrapper__auth-form").css("display", 'none');
}

if (localStorage.getItem("loggined") === 'false' &&
    localStorage.getItem("gitClick") === 'false') {
  $("#authPage").css("display", 'flex');
  $("#signIn").css("display", 'none');
  $("#form_wrapper").css("display", 'flex');
  $("#wrapper__auth-form").css("display", 'none');
}

if (localStorage.getItem("loggined") === 'true') {
  $("#name__username").text(localStorage.getItem("userName"));
  $("#name__nickname").text(localStorage.getItem("firstName"));
  $("#name").text(localStorage.getItem("firstName"));
}


// Setting users
let usersData = {
  lists: []
}


// localStorage.removeItem("usersInfo");

let usersList = JSON.parse(localStorage.getItem('usersInfo')) || [];
usersList = usersData;
console.log(usersList);

// Sign up function 
$("#register").click(() => {
  let user = {};
  user.firstname = $("#firstName").val();
  user.username = $("#userName").val();
  if (rd1.checked) {
    user.sex = 'Male';
  } else if (rd2.checked) {
    user.sex = 'Female';
  }
  user.email = $("#email").val();
  user.country = $("#input_field select").val();

  let obj = {
    name: $("#userName").val(),
  };

  let isCorrect1 = true;
  for (let i = 0; i < usersList.lists.length; i++) {
    if(obj.name ===  usersList.lists[i].username) {
      isCorrect1 = false;
    }
  }

  if(isCorrect1 === true) {
    if ($("#userPassword").val() === $("#confirmPassword").val()) {  
      user.password = $("#userPassword").val();
      usersData.lists.push(user);
      localStorage.setItem('usersInfo', JSON.stringify(usersData));
      $("#authPage").css("display", 'none');
      $("#signIn").css("display", 'none');
      $("#form_wrapper").css("display", 'none');
      $("#wrapper__auth-form").css("display", 'flex');
      localStorage.setItem("loggined", 'true');
      localStorage.setItem("firstName", user.firstname);
      localStorage.setItem("userName", user.username);
      localStorage.setItem("sex", user.sex);
      localStorage.setItem("email", user.email);
      localStorage.setItem("location", user.country);

      $("#name__username").text(user.username);
      $("#name__nickname").text(user.firstname);
      $("#name").text(user.firstname);
    } else {
      alert("confirm password value");
      $("#userPassword").val() = '';
      $("#confirmPassword").val() = '';
    }
  } else {
    alert("This username is already taken");
  }
});

// Sign in function
$("#loginBtn").click(() => {

  localStorage.setItem("userName", $("#loginUsername").val());
  localStorage.setItem("password", $("#loginPassword").val())

  let candidateConfirm = false;
  let candidate = {
    name: localStorage.getItem("userName"),
    password: localStorage.getItem("password")
  };

  console.log(candidate);

  let newUsersList = JSON.parse(localStorage.getItem("usersInfo"));
  for (let i = 0; i < newUsersList.lists.length; i++) {
   if (newUsersList.lists[i].username === candidate.name && newUsersList.lists[i].password === candidate.password) {
     candidateConfirm = true;
     localStorage.setItem("loggined", 'true');
   } else {
     candidateConfirm = false;
     localStorage.setItem("loggined", 'false');
   }

   if (newUsersList.lists[i].username === candidate.name) {
     localStorage.setItem("firstName", newUsersList.lists[i].firstname);
   }
  }

  if(candidateConfirm) {
    $("#authPage").css("display", 'none');
    $("#signIn").css("display", 'none');
    $("#form_wrapper").css("display", 'none');
    $("#wrapper__auth-form").css("display", 'flex');
  } else {
    alert("You were wrong");
  }
});