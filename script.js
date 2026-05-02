// MENU FIX (100% WORKING)
document.getElementById("menuBtn").addEventListener("click", function(){
  document.getElementById("navLinks").classList.toggle("active");
});

// SCROLL ANIMATION
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});