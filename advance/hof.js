const angka = [1,3,2,6,9,1,2,4,2,10];

// Filter - mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// kalilkan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(angka);
// console.log(newAngka);

// reduce
// jumlahkan seluruh selemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);

// method chaining
// cari angka > 5
// hasil di kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((acc, cur) => acc + cur);
console.log(hasil);