// konsep this pada arrow function
// const Mahasiswa = function () {
//   this.nama = "Hafid";
//   this.umur = 19;
//   this.sayHello = () => {
//     console.log(
//       `Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`
//     );
//   };

  // setInterval(() => {
  //   console.log(this.umur++)
  // }, 500)
// };

// const hafid = new Mahasiswa();

const box = document.querySelector('.box');

box.addEventListener('click', function(){
  let satu = 'size';
  let dua = 'caption';

  if(this.classList.contains(satu)){
    [satu,dua] = [dua,satu]
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600)
})
