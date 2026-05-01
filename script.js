document.addEventListener("DOMContentLoaded", function () {

  // slider
  let slides = document.querySelectorAll(".slide");
  let i = 0;

  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  }, 3000);

  // menu toggle
  window.toggleMenu = function () {
    let menu = document.getElementById("navLinks");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  // scroll to form
  window.scrollToForm = function () {
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  }

  // payment
  window.payNow = function () {
    window.open("https://rzp.io/l/YOUR_LINK");
  }

  // form
  const scriptURL = "https://script.google.com/macros/s/AKfycbwWUZWRLr7ncGtT-cVdQQy8_a04d1kluRQvyCQ6e_Nvzfk3wv8ThTcV3-Wf-Fmz0hl4cA/exec";
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", e => {
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