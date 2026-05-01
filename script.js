document.addEventListener("DOMContentLoaded", function () {

  // SLIDER SAFE VERSION
  let slides = document.querySelectorAll(".slide");
  let i = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[i].classList.remove("active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("active");
    }, 3000);
  }

  // MENU TOGGLE
  window.toggleMenu = function () {
    let menu = document.getElementById("navLinks");
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  }

  // SCROLL TO FORM
  window.scrollToForm = function () {
    let form = document.getElementById("form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  }

  // NAVBAR SCROLL EFFECT
  window.addEventListener("scroll", function () {
    let nav = document.getElementById("navbar");
    if (nav) {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  // SCROLL REVEAL
  let reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    let windowHeight = window.innerHeight;

    reveals.forEach(el => {
      let elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // PAYMENT
  window.payNow = function () {
    window.open("https://rzp.io/l/YOUR_LINK");
  }

  // WHATSAPP
  window.openWhatsApp = function () {
    let msg = "Hi, I want to book a coaching session.";
    window.open("https://wa.me/919711771383?text=" + encodeURIComponent(msg));
  }

  // FORM (FIXED)
  const scriptURL = "https://script.google.com/macros/s/AKfycbwWUZWRLr7ncGtT-cVdQQy8_a04d1kluRQvyCQ6e_Nvzfk3wv8ThTcV3-Wf-Fmz0hl4cA/exec";
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
      })
      .then(() => {
        alert("Submitted Successfully ✅");
        form.reset();
      })
      .catch(() => {
        alert("Error ❌");
      });
    });
  }

});