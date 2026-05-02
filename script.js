document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });
  }

  const scriptURL = "https://script.google.com/macros/s/AKfycbzKKiQrxgLUecSnx8Q7FBCkFmXkWl6LD4bx5JPYWHCgT77_MqeDLsEtrL6gITmAuvYX5w/exec";

  const enquiryForm = document.getElementById("enquiryForm");
  const bookingForm = document.getElementById("bookingForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = enquiryForm.querySelector("button");
      submitBtn.disabled = true;
      submitBtn.innerText = "Submitting...";

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(enquiryForm)
      })
        .then(() => {
          alert("Enquiry submitted successfully!");
          enquiryForm.reset();
        })
        .catch(() => {
          alert("Something went wrong. Please try again.");
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerText = "Submit Enquiry";
        });
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      startBookingPayment(bookingForm);
    });
  }

  function startBookingPayment(form) {
    if (typeof Razorpay === "undefined") {
      alert("Payment gateway loading. Please try again in a few seconds.");
      return;
    }

    const submitBtn = form.querySelector("button");
    submitBtn.disabled = true;
    submitBtn.innerText = "Opening Payment...";

    const formData = new FormData(form);

    const name =
      formData.get("name") ||
      formData.get("Name") ||
      "";

    const email =
      formData.get("email") ||
      formData.get("Email") ||
      "";

    const phone =
      formData.get("phone") ||
      formData.get("Phone") ||
      formData.get("mobile") ||
      formData.get("Mobile") ||
      "";

    const options = {
      key: "rzp_test_1234567890",
      amount: 99900,
      currency: "INR",
      name: "Empower Her by Jazz",
      description: "Book Your Spot - Empower Her Session",

      handler: function (response) {
        formData.append("payment_status", "Success");
        formData.append("razorpay_payment_id", response.razorpay_payment_id);

        fetch(scriptURL, {
          method: "POST",
          body: formData
        })
          .then(() => {
            alert("Payment successful! Your booking has been submitted.");

            form.reset();

            const whatsappText = encodeURIComponent(
              `Hi, I have completed the payment for Empower Her session. Payment ID: ${response.razorpay_payment_id}`
            );

            window.open(
              `https://wa.me/919711771383?text=${whatsappText}`,
              "_blank"
            );
          })
          .catch(() => {
            alert("Payment successful, but booking data could not be saved. Please contact us on WhatsApp.");
          })
          .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit Booking";
          });
      },

      prefill: {
        name: name,
        email: email,
        contact: phone
      },

      theme: {
        color: "#d81b60"
      },

      modal: {
        ondismiss: function () {
          submitBtn.disabled = false;
          submitBtn.innerText = "Submit Booking";
        }
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
});

function payNow() {
  if (typeof Razorpay === "undefined") {
    alert("Payment gateway loading. Please try again in a few seconds.");
    return;
  }

  const options = {
    key: "rzp_test_1234567890",
    amount: 99900,
    currency: "INR",
    name: "Empower Her by Jazz",
    description: "Book Your Spot",
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);

      const whatsappText = encodeURIComponent(
        `Hi, I have completed the payment for Empower Her session. Payment ID: ${response.razorpay_payment_id}`
      );

      window.open(
        `https://wa.me/919711771383?text=${whatsappText}`,
        "_blank"
      );
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