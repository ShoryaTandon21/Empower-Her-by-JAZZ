function toggleMenu(){
  let nav = document.getElementById("navLinks");

  if(nav.style.display === "block"){
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:"smooth"
  });

  // close menu after click
  document.getElementById("navLinks").style.display="none";
}

function openWhatsApp(){
  window.open("https://wa.me/919711771383");
}