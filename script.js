document.addEventListener("DOMContentLoaded", function(){

  window.toggleMenu = function(){
    let nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display==="block" ? "none" : "block";
  }

  window.scrollToSection = function(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
  }

  window.openWhatsApp = function(){
    window.open("https://wa.me/919711771383");
  }

  window.payNow = function(){
    window.open("https://rzp.io/l/YOUR_LINK");
  }

});