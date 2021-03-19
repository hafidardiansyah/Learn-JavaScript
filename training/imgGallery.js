const container = document.querySelector(".container");
const mainImage = document.querySelector(".mainImage");
const thumbs = document.querySelectorAll(".thumbnail");

container.addEventListener("click", function (e) {
  // cek apakah yang di-klik adalah thumb
  if (e.target.className == "thumbnail") {
    mainImage.src = e.target.src;
    mainImage.classList.add("fade");
    setTimeout(function () {
      mainImage.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      //   if (thums.classList.contains("active")) {
      //     e.target.classList.remove("active");
      //   }
      thumb.className = "thumbnail";
    });

    e.target.classList.add("active");
  }
});
