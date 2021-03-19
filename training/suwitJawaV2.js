function AmbilPilihanKomputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function ambilHasil(comp, p) {
  if (p == comp) return "SERI";
  if (p == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (p == "orang") return comp == "semut" ? "MENANG" : "KALAH";
  if (p == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanKomputer = AmbilPilihanKomputer();
//   const pilihanPemain = pGajah.className;
//   const hasil = ambilHasil(pilihanKomputer, pilihanPemain);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "assets/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanKomputer = AmbilPilihanKomputer();
//   const pilihanPemain = pOrang.className;
//   const hasil = ambilHasil(pilihanKomputer, pilihanPemain);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "assets/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanKomputer = AmbilPilihanKomputer();
//   const pilihanPemain = pSemut.className;
//   const hasil = ambilHasil(pilihanKomputer, pilihanPemain);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "assets/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "../assets/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanKomputer = AmbilPilihanKomputer();
    const pilihanPemain = pil.className;
    const hasil = ambilHasil(pilihanKomputer, pilihanPemain);
    console.log(pilihanKomputer);
    console.log(pilihanPemain);
    putar();

    setTimeout(function () {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "../assets/" + pilihanKomputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
