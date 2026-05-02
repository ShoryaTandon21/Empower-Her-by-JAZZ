function scrollToForm(){
  document.getElementById("formSection").scrollIntoView({behavior:"smooth"});
}

// GOOGLE SHEET API (optional)
async function saveToSheet(data){
  fetch("YOUR_GOOGLE_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify(data)
  });
}

// RAZORPAY PAYMENT
function payNow(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if(!name || !email || !phone){
    alert("Please fill all details");
    return;
  }

  var options = {
    "key": "YOUR_RAZORPAY_KEY",
    "amount": 99900,
    "currency": "INR",
    "name": "Empower Her™",
    "description": "Transformational Session",
    "handler": function (response){
        alert("Payment Successful!");

        saveToSheet({name,email,phone,paymentId:response.razorpay_payment_id});

        window.location.href = "thankyou.html";
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}