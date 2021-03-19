// Cara untuk membuat Object pada JavaScript
// 1. Object Literal

// let mahasiswa = {
//     nama: "Hafid",
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Hai ${this.nama}, selamat makan!`)
//     }
// }

// 2. Function Declaration

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hai ${this.nama}, selamat makan!`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hai ${this.nama}, selamat main!`);
//   };

//   return mahasiswa;
// }

// let hafid = Mahasiswa("Hafid", 10);
// let ardi = Mahasiswa("Ardi", 10);

// 3. Constructor Function
// // keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hai ${this.nama}, selamat makan!`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hai ${this.nama}, selamat main!`);
//   };
// }

// let hafid = new Mahasiswa("Hafid", 10);
// let ardi = new Mahasiswa("Ardi", 10);

// 4. Object Create
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hai ${this.nama}, selamat makan!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Hai ${this.nama}, selamat main!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let hafid = Mahasiswa("Hafid", 10);
// let ardi = Mahasiswa("Ardi", 10);

// Prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan`;
// };

// let hafid = new Mahasiswa("Hafid", 10);

// version Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
  }
}

let hafid = new Mahasiswa("hafid", 10);
