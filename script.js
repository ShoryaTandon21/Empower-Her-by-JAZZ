document.addEventListener("DOMContentLoaded", function(){

  window.toggleMenu = function(){
    document.getElementById("navLinks").classList.toggle("active");
  }

  window.openWhatsApp = function(){
    window.open("https://wa.me/919711771383");
  }

  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(){
    slides.forEach(s => s.style.display="none");
    slides[index].style.display="block";
    index = (index+1)%slides.length;
  }
  function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

  showSlide();
  setInterval(showSlide,3000);

});