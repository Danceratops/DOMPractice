function loadEvents() {
    var cards = document.querySelectorAll(".card")
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            card.querySelector(".card-title-english").classList.toggle("hidden");
            card.querySelector(".card-title-spanish").classList.toggle("hidden");
        });
    });
}

loadEvents();