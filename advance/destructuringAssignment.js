// Desctucturing Variabel / Assignment

// Desctucturing Array
// const perkenalan = ['halo','nama','saya','hafid'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam)

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];  
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return[1,2];
// }

// const [a,b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1,2,3];
// console.log(a);
// console.log(values);




// Destructuring Object
// const mhs = {
//     nama: 'Hafid',
//     umur: 19
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ( {nama, umur}= { nama: 'Hafid',umur: 19});
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//     nama: 'Hafid',
//     umur: 19
// }
    
// const {nama: n, umur: u} = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//     nama: 'Hafid',
//     umur: 19,
//     email: 'hafid@gmail.com'
// }
    
// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// Memberikan nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Hafid',
//     umur: 19,
//     email: 'hafid@gmail.com'
// }
    
// const {nama = n, umur = u, email: e = 'email@default.com'} = mhs;
// console.log(e);


// Rest parameter
// const mhs = {
//     nama: 'Hafid',
//     umur: 19,
//     email: 'hafid@gmail.com'
// }
    
// const {nama, ...values} = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id:1,
//     nama: 'Hafid',
//     umur: 19,
//     email: 'hafid@gmail.com'
// }

// function getIdMhs({id}){
//     return id;
// }
    
// console.log(getIdMhs(mhs));