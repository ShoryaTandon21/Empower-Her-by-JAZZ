document.addEventListener("DOMContentLoaded", function(){

  window.toggleMenu = function(){
    let nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  }

  window.scrollToSection = function(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
  }

  window.openWhatsApp = function(){
    window.open("https://wa.me/919711771383");
  }

  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(){
    slides.forEach(s => s.style.display = "none");
    slides[index].style.display = "block";
    index = (index + 1) % slides.length;
  }

  showSlide();
  setInterval(showSlide, 3000);

});