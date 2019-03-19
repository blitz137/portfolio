window.onscroll = function() {stickFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var burger = document.querySelector('.fa-hamburger');
var navDrop = document.querySelector('.navDrop')

function stickFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }
}



burger.addEventListener('click', event => {
  	navDrop.classList.toggle("visible");
});
