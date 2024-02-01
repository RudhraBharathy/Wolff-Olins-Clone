$(document).ready(function () {
  const body = document.querySelector("body");

  $(window).scroll(function () {
    $(".navbar").toggleClass("color-change", $(document).scrollTop() > 20);
    $(".tansprent_bg").toggleClass("size-change", $(document).scrollTop() > 20);
  });

  const inputOpen = document.querySelector(".search-btn");
  const inputBar = document.querySelector(".search-bar");
  const inputClose = document.querySelector(".input-close-btn");

  inputOpen.addEventListener("click", function () {
    inputBar.style.display = "block";
    inputBar.style.transition = "all 0.5s ease-in-out";
    body.style.backdropFilter = "blur(5px)";
  });

  inputClose.addEventListener("click", function () {
    inputBar.style.display = "none";
    body.style.backdropFilter = "none";
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
