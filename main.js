// partie hamburger effacer pour modification
// ouvrir et fermer


// Form Submission
const form = document.querySelector(".reservation-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Merci pour votre réservation ! Nous vous confirmons par email sous peu."
  );
  form.reset();
});





