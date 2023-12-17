let slideIndex = 0;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slider img');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

showSlide(slideIndex);

// -----------------------------javascript for menu--------------------------

var navbar = document.getElementById("navbar");
function showMenu(){
  navbar.style.left = "0"
}
function hideMenu(){
  navbar.style.left = "-120vw"
}