// function init() {
//   let nama = "Hafid";
//   let umur = 19;
//   function tampilNama() {
//     console.log(nama);
//     console.log(umur);
//   }
//   console.dir(tampilNama);
// }
// init();

// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama("Hafid");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");

// selamatPagi("Hafid");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
