// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     return ditepati 
//     ? resolve("Jadi telah ditepati!") 
//     : reject("Ingkar janji..");
// })

// janji1
//     .then(response => console.log("OK : " + response))
//     .catch(response => console.log("NOT OK : " + response));

// const janji2 = new Promise((resolve, reject) => {
//     return ditepati 
//     ? setTimeout(() => {
//         resolve("Ditepati setelah beberapa waktu!");
//     }, 2000) 
//     : setTimeout(() => {
//         resolve("Tidak ditepati seteleah beberapa waktu!");
//     })
// })

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));

// janji2
//     .finally(() => console.log("selesai menunggu!"))
//     .then(response => console.log("OK : " + response))
//     .catch(response => console.log("NOT OK : " + response));

// console.log("selesai");

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avangers',
            sutradara: 'Hafid Ardiansyah',
            pemeran: 'Ardi',
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            senin: 'Mendung',
            selasa: 'Cerah',
        }])
    }, 500);
});

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })