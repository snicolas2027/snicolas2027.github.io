function myFunction() {
  var menubtn = document.getElementById("sidebar");
  menubtn.classList.toggle("open");

  var menubtn = document.getElementById("main");
  menubtn.classList.toggle("hide");
}

function myhisFunction() {
  var btn = document.getElementById("history");
  btn.classList.toggle("roll");
}

function myadmFunction() {
  var btn = document.getElementById("admin");
  btn.classList.toggle("roll");
}

function mytchFunction() {
  var btn = document.getElementById("teacher");
  btn.classList.toggle("roll");
}

function myabtFunction() {
  var btn = document.getElementById("abt");
  btn.classList.toggle("roll");
}
