let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 3000);

/* GOOGLE SHEET CONNECTION */
const scriptURL = "https://script.google.com/macros/s/AKfycbwWUZWRLr7ncGtT-cVdQQy8_a04d1kluRQvyCQ6e_Nvzfk3wv8ThTcV3-Wf-Fmz0hl4cA/exec";
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form)})
  .then(() => alert("Submitted Successfully"))
  .catch(() => alert("Error"));
});