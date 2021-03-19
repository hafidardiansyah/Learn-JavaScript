// function jumlahVolumeDuaKubus(a, b) {
//   return a * a * a + b * b * b;
// }
// console.log(jumlahVolumeDuaKubus(8, 3));

// function jumlahVolumeDuaKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeB = b * b * b;
//   volumeA = a * a * a;

//   total = volumeA + volumeB;

//   return total;
// }

// Arguments

// function tambah() {
//   var hasil = 0;
//   for (i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var coba = tambah(3, 1, 5);
// console.log(coba);

// scope

// global scope / window scope
function tes() {
  // var a = 3;
  // var a di dalam function disebut dengan variabel lokal
  a = 2;
  // jika ingin menampilkan isi nilai dari variabel luar
  // dengan menambahkan window
}

tes();
console.log(a);
// akan menampilkan 1 karena scopenya adalah global
