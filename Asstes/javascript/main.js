function myfun() {
  var emailcheck = document.getElementById("emailcheck").value;
  var pattern =
    /^[A-Z a-z 0-9 . _  -]{3,}@[A-Z a-z -]{3,}[.]{1}[A-Z a-z .]{2,10}$/;
  if (pattern.test(emailcheck)) {
    document.getElementById("showMessage").innerHTML = "Correct email id ";
  } else {
    document.getElementById("showMessage").innerHTML =
      "Sorry email is not correct ";
  }
}
