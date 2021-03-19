var tanya = true;
while (tanya) {
  var p = prompt("Masukkan pilihan anda (contoh : gajah, semut, orang)");

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasi = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = comp == "semut" ? "MENANG" : "KALAH";
  } else if (p == "semut") {
    hasil = comp == "orang " ? "KALAH" : "MENANG";
  } else {
    hasil = "masukkan pilihan yang salah!";
  }

  alert(
    "Kamu memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      "\nMaka hasilnya : Kamu " +
      hasil
  );

  tanya = confirm("Lagi?");
}
alert("Terimakasih sudah bermain.");
