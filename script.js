function toggleMenu(){
  let nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
  document.getElementById("navLinks").style.display="none";
}

function openWhatsApp(){
  window.open("https://wa.me/919711771383");
}

function payNow(){
  window.open("https://rzp.io/l/YOUR_LINK");
}