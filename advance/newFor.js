// * for Of

// const mhs = ['hafid', 'ardi'];

// mhs.forEach((m) => {
//     console.log(m);
// });

// for(const m of mhs){
//     console.log(m);
// }

// String
// const nama = 'Hafid';
// for(const n of nama){
//     console.log(n);
// }

// const mhs = ['hafid', 'ardi'];
// mhs.forEach((m, i) => {
//     console.log(m);
//     console.log(i);
// });

// for(const [m, i] of mhs.entries()){
//     console.log(m);
//     console.log(i);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.textContent));

// for(n of liNama){
//     console.log(n.innerHTML);
// }


// arguments
// function jumlahkanAngka(){
//     let jumlah = 0; 
//     for(a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));


// * for In
const mhs = {
    nama: 'hafid',
    umur: 19
}

for(m in mhs){
    console.log(mhs[m]);
}