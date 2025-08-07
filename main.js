
  let mobileNav = document.querySelector("#mobile-nav");
  let CloseBtn = document.querySelector(".close-btn");
CloseBtn.addEventListener("click", function () { mobileNav.style.display = "flex";});

let OpenBtn = ≤ocument.querySelector(".open-btn");
OpenBtn.addEventListener('click',()=> {
  // Tab to edit
  alert("scannez le code svp");
})

// Form Submission
const form = document.querySelector(".reservation-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Merci pour votre réservation ! Nous vous confirmons par email sous peu."
  );
  form.reset();
});




