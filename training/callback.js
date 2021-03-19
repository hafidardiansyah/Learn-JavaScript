$.ajax({
    url: 'https://reqres.in/api/users?page=2',
    success: results => {
        const people = results.data;
        let cards = '';
        people.forEach(p => {
            cards += showCards(p);
        });
        $('.people-container').html(cards);


        // Ketika tombol detail di-klik
        $('.modal-detail-button').on('click', function () {
            $.ajax({
                url: 'https://reqres.in/api/users?page=2&id=' + $(this).data('peopleid'),
                success: result => {
                    const people = result.data;
                    const ad = result.ad;
                    const peopleDetail = showPeopleDetail(people, ad);
                    $('.modal-body').html(peopleDetail);
                },
                error: (e) => {
                    console.log(e.responseText);
                }
            });
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

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