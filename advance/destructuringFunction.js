// function kalkulasi(a,b){
//     return [ a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1]

// const [jumlah, kali] = penjumlahanPerkalian(2,3);

// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);

// function kalkulasi(a,b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kurang, kali} = kalkulasi(2,3);
// console.log(tambah);


// destructuring function arguments
const mhs1 = {
    nama: 'hafid',
    umur: 19,
    nilai: {
        tugas: 80,
        uts: 85,
    }
}

// function cetakMhs(nama, umur){
//     return `Halo, nama saya ${nama}, saya berumut ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// const mhs1 = {
//     nama: 'hafid',
//     umur: 19
// }

// function cetakMhs(mhs){
//     return `Halo, nama saya ${mhs.nama}, saya berumut ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts}}){
    return `Halo, nama saya ${nama}, saya berumut ${umur} tahun. dan nilai uts saya adalah ${uts}`;
}

console.log(cetakMhs(mhs1));
