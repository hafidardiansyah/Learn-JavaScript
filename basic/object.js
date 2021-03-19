var mhs = {
  nama: "Hafid",
  umur: 19,
  sapa: function () {
    return "Nama saya " + this.nama + " umur saya " + this.umur;
  },
  alamat: {
    kota: "Malang",
    provinsi: "Jawa Timur",
  },
};

console.log(mhs.sapa());

function Mhs2(nama) {
  this.nama = nama;
}

var mhs3 = new Mhs2("hafid");
