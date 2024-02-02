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

const vimeoPlayerContainer = document.querySelector("iframe");
const toggleButton = $(".video-controls");
const vimeoPlayer = new Vimeo.Player(vimeoPlayerContainer);

toggleButton.click(function () {
  vimeoPlayer.getPaused().then(function (paused) {
    if (paused) {
      vimeoPlayer.play();
      $('.video-triangle').css('display', 'none');
      toggleButton.addClass('videoPauseCursor');
      toggleButton.removeClass('videoPlayCursor');
    } else {
      vimeoPlayer.pause();
      toggleButton.removeClass('videoPauseCursor');
      toggleButton.addClass('videoPlayCursor');
    }
  });
}); 