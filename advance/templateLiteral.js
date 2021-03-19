// HTML Fragments
// const mhs = {
//     nama: 'Hafid'
// };

// const el = `<div class="mhs">
// <h1>${mhs.nama}</h1>
// </div>`;

// Looping
// const mhs = [
//     {
//         nama:'hafid'
//     },
//     {
//         nama:'ardi'
//     },
//     {
//         nama:'ansyah'
//     },
// ]

// const el = `<h1>
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     </ul>`).join('')}
// </h1>`;

// Conditionals
// ternary
// const lagu = {
//     judul: 'tetap coding',
//     penyanyi: 'ardi',
//     feat: 'ansyah'
// }

// const el = `<ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// </ul>`;

// Nested
// HTML Fragments bersarang
// const mhs = {
//     nama: 'hafid',
//     semester: 5,
//     mataKul: [
//         'Rekayasa web',
//         'Database'
//     ]
// }

// function cetakMataKuliah(matakuliah){
//     return `
//         <ul>
//             ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
//         </ul>
//     `
// }

// const el = `<div>
//     <h2>Nama : ${mhs.nama}</h2>
//     <h4>Semester : ${mhs.semester}</h4>
//     <h2>Mata Kuliah</h2>

//     ${cetakMataKuliah(mhs.mataKul)}
// </div>`

// document.body.innerHTML = el;

// Tagged Templates
// const nama = 'Hafid';
// const umur = 19;

// function cetakUser(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     // reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = cetakUser`Halo, nama saya ${nama}, saya umur ${umur} tahun.`;
// console.log(str);

// Higlight
const nama = 'Hafid';
const umur = 19;
const email = 'hafid@gmail.com'

function cetakUser(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = cetakUser`Halo, nama saya ${nama}, saya umur ${umur} tahun, Dan email saya adalah : ${email}`;

document.body.innerHTML = str;
