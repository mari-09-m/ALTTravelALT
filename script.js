// +++++++++++++++++NAVBAR JS ++++++++++++++++++++++++
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");

    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

//  +++++++++++++++++STICKY  NAVBAR JS ++++++++++++++++++++++++
const header = document.querySelector(".header-alt");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling JS

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("learn-more-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#target-section").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
});

// +++++++++++++++++Expanding Gallery JS ++++++++++++++++++++++++

const images = document.querySelectorAll(".image");

const expandImage = () => {
  images.forEach((image) => {
    image.addEventListener("click", () => {
      const active = document.querySelector(".active");

      active.classList.remove("active");

      image.classList.add("active");
    });
  });
};

expandImage();

//  +++++++++++++++++SOLO CAROUSEL JS ++++++++++++++++++++++++
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
// +++++++++++++++++SOLO READ MORE JS ++++++++++++++++++++++++
function toggleText(id) {
  const shortDescription = document.getElementById(`short-description-${id}`);
  const fullDescription = document.getElementById(`full-description-${id}`);
  const button = document.getElementById(`read-more-btn-${id}`);

  if (fullDescription.style.display === "none") {
    fullDescription.style.display = "block";
    shortDescription.style.display = "none";
    button.innerText = "Read Less";
  } else {
    fullDescription.style.display = "none";
    shortDescription.style.display = "block";
    button.innerText = "Read More";
  }
}

//SOLO GALLLERY LOAD MORE BUTTONS

const loadMoreBtn = document.getElementById("load-more-btn");
const loadLessBtn = document.getElementById("load-less-btn");
const hiddenPhotos = document.querySelectorAll(".photo.hidden");

loadMoreBtn.addEventListener("click", () => {
  hiddenPhotos.forEach((photo) => {
    photo.classList.remove("hidden");
  });
  loadMoreBtn.classList.add("hidden");
  loadLessBtn.classList.remove("hidden");
});

loadLessBtn.addEventListener("click", () => {
  hiddenPhotos.forEach((photo) => {
    photo.classList.add("hidden");
  });
  loadMoreBtn.classList.remove("hidden");
  loadLessBtn.classList.add("hidden");
});
