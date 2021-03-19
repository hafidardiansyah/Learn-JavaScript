// const searchButton = document.querySelector('.search-button');

// searchButton.addEventListener('click', function () {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('https://reqres.in/api/users/' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const people = response.data;
//             const peopleContainer = document.querySelector('.people-container');
//             peopleContainer.innerHTML = showCards(people);

//             // Ketika tombol detail di-klik
//             const modalDetailButton = document.querySelector('.modal-detail-button');
//             const peopleId = modalDetailButton.dataset.peopleid;

//             modalDetailButton.addEventListener('click', function(){
//                 fetch('https://reqres.in/api/users/' + peopleId)
//                     .then(response => response.json())
//                     .then(response => {
//                         const peopleDetail = showPeopleDetail(response.data,  response.support);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalBody.innerHTML = peopleDetail;
//                     })
//             })
//         });
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const people = await getPeople(inputKeyword.value);
        updateUI(people);
    }catch(e){
        alert(e);
    }
});

// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const peopleid = e.target.dataset.peopleid;
        const peopleDetail = await getPeopleDetail(peopleid);
        updateUIDetail(peopleDetail);
    }
})


function getPeopleDetail(peopleid){
    return fetch('https://reqres.in/api/users/' + peopleid)
        .then(response => response.json())
        .then(response => response)
}

function updateUIDetail(response){
    const peopleDetail = showPeopleDetail(response.data,  response.support);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = peopleDetail;
}


function getPeople(keyword){
    if(keyword === '') throw new Error('Enter id user')
    return fetch('https://reqres.in/api/users/' + keyword)
        .then(response => {
            if(!response.ok){
                throw new Error('User id not found')
            }
            return response.json()
        })
        .then(response => response.data);
    
}

function updateUI(people){
    const peopleContainer = document.querySelector('.people-container');
    peopleContainer.innerHTML = showCards(people);
}

function showCards(p) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                <img src="${p.avatar}" class="card-img-top" alt="${p.avatar} image">
                    <div class="card-body">
                    <h5 class="card-title">${p.first_name} ${p.last_name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${p.email}</h6>
                    <button href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#peopleDetailModal" data-peopleid="${p.id}">Show Details</button>
                    </div>
                </div>
            </div>`;
}

function showPeopleDetail(people, ad) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${people.avatar}" alt="${people.avatar} image" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${people.first_name} ${people.last_name}</h4></li>
                            <li class="list-group-item"><strong>${people.email}</strong></li>
                            <li class="list-group-item"><strong>${ad.company}</strong></li>
                            <li class="list-group-item"><strong><a href="${ad.url}">Link company</a></strong></li>
                            <li class="list-group-item">${ad.text}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}