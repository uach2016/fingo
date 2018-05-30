/*Slide Show JS*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slide = document.getElementsByClassName("slide");
    var currentSlide = document.getElementsByClassName("current-slide");
  
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].className += " active"; 
    for (i = 0; i < currentSlide.length; i++) {
      currentSlide[i].addEventListener("click", showSlides);
   }
}