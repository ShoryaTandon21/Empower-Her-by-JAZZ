function toggleMenu(){
  let nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function openWhatsApp(){
  window.open("https://wa.me/919711771383");
}