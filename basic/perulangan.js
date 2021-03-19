// var text = prompt("Masukkan kata yang ingin di perulangankan!");
// var no = prompt("Masukkan nilai untuk perulangan");

// while (no >= 1) {
//   console.log(text + "\n");
//   no--;
// }

var jmlAngkot = 10;
var anggotBeroperasi = 7;
var noAngkot = 1;

while (noAngkot < anggotBeroperasi) {
  console.log("Angkot no " + noAngkot + " beroperasi dengan baik.");
  noAngkot++;
}
for (noAngkot = anggotBeroperasi; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot no " + noAngkot + " tidak beroperasi dengan baik.");
}
