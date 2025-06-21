function openNav() {
  const mobileNav = document.querySelector("#mobile-nav");
  mobileNav.style.display = "flex";
}

function closeNav() {
  const mobileNav = document.querySelector("#mobile-nav");
  mobileNav.style.display = "none";
}

// Form Submission
const form = document.querySelector(".reservation-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Merci pour votre réservation ! Nous vous confirmons par email sous peu."
  );
  form.reset();
});
