document.querySelector(".planet").addEventListener("click", (ev) => {
  document.querySelector(".planet").classList.toggle("day");

  document
    .querySelectorAll(".spots")
    .forEach((spot) => spot.classList.toggle("moonSpots"));
  document.querySelector(".header").classList.toggle("nightBg");
});

// Portfolio overlays
const projects = document.querySelector(".projects__container");

// When user clicks the portfolio project thumbnail, overlay appears.
projects.addEventListener("click", (event) => {
  const project = event.target.closest(".projects__card");
  const overlay = project.querySelector(".overlay");
  overlay.style.top = "0%";
  // overlay.style.opacity = "1";
});

// When use clicks the close button, overlay disappears.
projects.addEventListener("click", (event) => {
  if (event.target.closest(".closeBtn")) {
    const overlay = event.target.parentElement.parentElement;
    overlay.style.top = "100%";
    // overlay.style.opacity = "0";
  }
});
