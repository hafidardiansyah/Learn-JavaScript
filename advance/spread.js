// * spread operator adalah memecah (expand/unpack) iterables menjadi single element

// const mhs = ['hafid','ardi'];
// console.log(...mhs[0]);

// * Menggabungkan 2 array
// const mhs = ['hafid','ardi'];
// const dosen = ['budi'];
// const kelas = mhs.concat(dosen);
// const kelas = [...mhs, 'aji', ...dosen];
// console.log(kelas);

// * men-copy array
// const mhs = ['hafid', 'ardi'];
// ! false
// const mhs1 = mhs;
// mhs1[0] = 'budi';
// ! true
// const mhs1 = [...mhs];
// console.log(mhs);

// * ambil isi li
// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const title = document.querySelector('.title');
const huruf = [...title.textContent].map(h => `<span>${h}</span>`).join('');
title.innerHTML = huruf;