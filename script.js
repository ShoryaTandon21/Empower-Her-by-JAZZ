document.addEventListener("DOMContentLoaded", function(){

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if(menuBtn && navLinks){
    menuBtn.addEventListener("click", function(){
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function(){
        navLinks.classList.remove("active");
      });
    });
  }

  const scriptURL = "https://script.google.com/macros/s/AKfycbwWUZWRLr7ncGtT-cVdQQy8_a04d1kluRQvyCQ6e_Nvzfk3wv8ThTcV3-Wf-Fmz0hl4cA/exec";

  function connectForm(formId, successMessage){
    const form = document.getElementById(formId);
    if(!form) return;

    form.addEventListener("submit", function(e){
      e.preventDefault();

      const submitBtn = form.querySelector("button");
      submitBtn.disabled = true;
      submitBtn.innerText = "Submitting...";

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
      })
      .then(() => {
        alert(successMessage);
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = formId === "bookingForm" ? "Submit Booking" : "Submit Enquiry";
      });
    });
  }

  connectForm("enquiryForm", "Enquiry submitted successfully!");
  connectForm("bookingForm", "Booking details submitted successfully!");

});

function payNow(){
  if(typeof Razorpay === "undefined"){
    alert("Payment gateway loading. Please try again in a few seconds.");
    return;
  }

  const options = {
    key: "rzp_test_1234567890",
    amount: 99900,
    currency: "INR",
    name: "Empower Her by Jazz",
    description: "Book Your Spot",
    handler: function(response){
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      window.open("https://wa.me/919711771383?text=Hi%2C%20I%20have%20completed%20the%20payment%20for%20Empower%20Her%20session.", "_blank");
    },
    prefill: {
      contact: "9711771383"
    },
    theme: {
      color: "#d81b60"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}