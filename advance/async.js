function cobaPromise(waktu){
    return new Promise((resolve, reject) => {
        waktu < 5000 
        ? setTimeout(() => {
            resolve('selesai')
        }, waktu) 
        : reject('kelamaan!');
    })
}

async function cobaAsync(waktu){
    try{
        // try digunakan untuk resolve
        const coba = await cobaPromise(waktu);
        console.log(coba);
    }catch(e){
        // catch digunakan untuk reject wajib ada parameter biasanya untuk error
        console.error(e);
    }
}

cobaAsync(100);