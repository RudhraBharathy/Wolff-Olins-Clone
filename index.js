$(document).ready(function () {
  const body = document.querySelector("body");

  $(window).scroll(function () {
    $(".navbar").toggleClass("color-change", $(document).scrollTop() > 20);
    $(".tansprent_bg").toggleClass("size-change", $(document).scrollTop() > 20);
    $("body").toggleClass("bg-color-change", $(document).scrollTop() > 8000);
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

const vimeoPlayerContainer = document.querySelector("iframe");
const toggleButton = $(".video-controls");
const vimeoPlayer = new Vimeo.Player(vimeoPlayerContainer);

toggleButton.click(function () {
  vimeoPlayer.getPaused().then(function (paused) {
    if (paused) {
      vimeoPlayer.play();
      $(".video-triangle").css("display", "none");
      toggleButton.addClass("videoPauseCursor");
      toggleButton.removeClass("videoPlayCursor");
    } else {
      vimeoPlayer.pause();
      toggleButton.removeClass("videoPauseCursor");
      toggleButton.addClass("videoPlayCursor");
    }
  });
});

$(".fa-arrow-up").hover(function () {
  $(this).toggleClass("fa-bounce");
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

$(".fa-arrow-up").on("click", scrollToTop);

document.getElementById(
  "footerlogo"
).style.transform = `scaleY(1) translateY(0px)`;

$(window).scroll(function () {
  var scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition >= 10666) {
    var newSP = scrollPosition - 10666;
    var scaley = Math.min(1 + newSP * 0.0058, 2.5);
    var newScaleY = scaley.toFixed(3);
    var translate = Math.min(newSP * 0.197, 85);
    var newTranslate = translate.toFixed(0);
    if (scaley === 2.5 && translate === 85) {
      newScaleY = 1;
      newTranslate = 433;
    }
    document.getElementById("footerlogo").style.transition =
      "transform 0.3s ease-in-out"; // Add transition
    document.getElementById(
      "footerlogo"
    ).style.transform = `scaleY(${newScaleY}) translateY(${parseInt(
      newTranslate
    )}px)`;
  } else if (scrollPosition <= 10666) {
    document.getElementById(
      "footerlogo"
    ).style.transform = `scaleY(1) translateY(0px)`;
  }
});
