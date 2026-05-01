function toggleMenu(){
  let nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* 🔥 SLIDER FIX */
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

/* WhatsApp */
function openWhatsApp(){
  window.open("https://wa.me/919711771383");
}