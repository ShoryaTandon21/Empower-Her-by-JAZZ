document.addEventListener("DOMContentLoaded", function () {

  // scroll
  window.scrollToSection = function(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
  }

  // menu
  window.toggleMenu = function(){
    let menu = document.getElementById("navLinks");
    menu.style.display = menu.style.display==="flex"?"none":"flex";
  }

  // whatsapp
  window.openWhatsApp = function(){
    window.open("https://wa.me/919711771383");
  }

  // payment
  window.payNow = function(){
    window.open("https://rzp.io/l/YOUR_LINK");
  }

});