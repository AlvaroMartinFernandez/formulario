var boton = document.getElementById("myBtn");
var div = document.getElementById("my-alert");

boton.addEventListener("click", function() {
  div.classList.toggle("d-none");
  div.classList.toggle("d-block");
});