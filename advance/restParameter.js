// * Rest Parameter - Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function no(){
// function no(satu, dua, ...values){
//     return `
//     nilai satu = ${satu}
//     nilai dua = ${dua}
//     nilai tiga = ${values[0]}
//     `;
//     // return Array.from(arguments);
//     // return [...arguments];
// }

// console.log(no(1,2,3,4,5));


// function jumlahkan(...angka){
    // let total = 0;
    // for(const a of angka){
    //     total += a;
    // }
    // return total;

//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1,2,3,4,5));


// array destructuring
// const kelompok1 = ['hafid','ardi', 'ansyah'];
// const[ketua,wakil, ...anggota] = kelompok1;
// console.log(ketua);

// object destructuring
// const team = {
//     pm: 'hafid',
//     frontEnd: 'ardi',
//     backEnd: 'ansyah'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'hafid', false, 10, true,'ardi'));