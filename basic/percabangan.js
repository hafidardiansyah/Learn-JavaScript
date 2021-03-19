var jmlAngkot = 10;
var anggotBeroperasi = 7;
var noAngkot = 1;

while (noAngkot <= jmlAngkot) {
  if (noAngkot <= anggotBeroperasi && noAngkot !== 5) {
    // Kenapa angka 5 masih beroperi dengan baik?
    // Karena angka 5 lebih kecil dari sama dengan 7 maka akan dieksekusi terlebih dahulu
    console.log("Angkot no " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot no " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot no " + noAngkot + " sedang tidak beroperasi.");
  }
  noAngkot++;
}
