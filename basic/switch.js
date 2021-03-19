var item = prompt(
  "Masukkan pilihan makanan anda \n (cnth : susu, daging, softdrink, hamburger"
);

switch (item) {
  case "susu":
  case "daging":
    // Jika user memasukkan susu/daging maka eksekusi program di bawah ini
    alert("Makanan / minuman yang anda pilih SEHAT");
    break;

  case "softdrink":
  case "hamburger":
    alert("Makanan / minuman yang anda pilih TIDAK SEHAT");
    break;

  default:
    alert("Pilihan yang anda masukkan tidak ada!");
    break;
}
