// * Function yang dikirimkan sebagai parameter pada function yang lain
// * Function yang dieksekusi setelah fungsi yang lain selesai dijalankan

// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama =>
//     alert(`Halo, ${nama}`)
// );


// const mhs = [
//     {
//         "nama": "Hafid",
//         "id": 123
//     },
//     {
//         "nama": "Ardi",
//         "id": 345
//     },
//     {
//         "nama": "Ansyah",
//         "id": 678
//     },
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');


// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai valina js');

// getDataMahasiswa('mhs.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });

// console.log('selesai valina js');


// JQuery
console.log('mulai JQuery');
$.ajax({
    url: 'mhs.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai JQuery');