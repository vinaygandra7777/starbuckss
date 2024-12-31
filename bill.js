const billingForm = document.getElementById("billing-form");

    billingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(billingForm);
      const billingData = Object.fromEntries(formData.entries());

      localStorage.setItem("billingData", JSON.stringify(billingData));

      alert("Billing information saved successfully!");
      localStorage.removeItem("cart")
      window.location.href = "confirm.html"; 
    });
    function backtohome(){
      window.location.href="cart.html"
    }