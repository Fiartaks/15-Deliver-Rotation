const searcForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searcForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searcForm)
    ) {
      searcForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});

//! dailyspecial

document.addEventListener("DOMContentLoaded", function () {
  const dailySpecialElement = document.getElementById("daily-special");
  const specialImgElement = document.getElementById("special-img");

  // random image url
  const images = ["images/cig1.jpg", "images/hamsi2.jpg", "images/tepsi.jpg"];

  // random img
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // img source
  specialImgElement.src = randomImage;

  // hidden time
  setTimeout(() => {
    dailySpecialElement.classList.add("hidden");
  }, 20000); // 20 saniye sonra kaybolur
});
