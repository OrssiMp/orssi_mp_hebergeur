
  const mobileNav = document.querySelector("#mobile-nav");
const CloseBtn = document.querySelector(".close-btn");
CloseBtn.addEventListener("click", function (){mobileNav.style.display = "flex";});

const OpenBtn = ≤ocument.querySelector(".open-btn");
OpenBtn.addEventListener("click" , function (){mobileNav.style.display = "flex";});

// Form Submission
const form = document.querySelector(".reservation-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Merci pour votre réservation ! Nous vous confirmons par email sous peu."
  );
  form.reset();
});



