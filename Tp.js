//Link til Quadsats request a demo side
function openLink() {
  window.location.href='https://quadsat.com/request-a-demo/';
}

//Kontakt formular
function validation(){
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var error = document.getElementById("error");
  var text;

  error.style.padding = "15px";

  if(fname.length <1){
    text = "Please write your name";
    error.innerHTML = text;
    return false;

  }

  if(phone.length <1){
    text = "Please write your phone number";
    error.innerHTML = text;
    return false;

  }

  if(subject.length <= 1){
    text = "Please write your intended message";
    error.innerHTML = text;
    return false;
}

    if(email.indexOf("@") == -1 || email.length <1){
      text = "Please write your e-mail address";
      error.innerHTML = text;
      return false;

    }


  alert("Your message is sent")
  return true;

}

//Loader quote slide 1 direkte når man går ind på siden
window.onload=function(){

//Quote Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000);
}
}


//Back to top button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
topFunction()
