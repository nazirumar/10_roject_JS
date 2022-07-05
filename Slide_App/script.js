const btnforwadDev = document.querySelector('.forward')
const btnbackforwadDev = document.querySelector('.forward')
const imgDev = document.querySelector('.imglist')



const imgeList=[
    './img/img (1).jpg',
    './img/img (2).jpg',
    './img/img (3).jpg',
    './img/img (4).jpg',
    './img/img (5).jpg',
    './img/img (6).jpg',
    './img/img (7).jpg',
    './img/img (8).jpg',
    './img/img (9).jpg',
    './img/img (10).jpg',

]

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}