var button = document.querySelector(".icon-settings");
var secondButon = document.querySelector(".btn-small-menu");

function myToggle() {
  var showMenu = document.querySelector(".menu");
  showMenu.classList.toggle("open-menu");
}
button.addEventListener("click", myToggle);
function secondToggle(){
  var secondShowMenu = document.querySelector(".small-menu");
  secondShowMenu.classList.toggle("open-menu");
}
secondButon.addEventListener("click", secondToggle);
