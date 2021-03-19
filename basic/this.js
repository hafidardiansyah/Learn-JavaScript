// this
// var a = 10;
// console.log(this.a);

// cara 1 - function declaration
function halo() {
  console.log(this);
  console.log("halo");
}
this.halo();
// this mengembalikan object Global

// cara 2 - function literal
var obj = { nama: "Hafid ardiansyah" };
obj.halo = function () {
  console.log(this);
  console.log("halo");
};
obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - function constructor
function Hai() {
  console.log(this);
  console.log("halo");
}
new Hai();
// this mengembalikan object yang baru di buat
