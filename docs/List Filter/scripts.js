function loadEvents() {
    var activities = document.querySelectorAll(".activity-name");

    var search = document.getElementById("search-bar");
    
    search.addEventListener('keyup', function (e) {
        var text = search.value;
        console.log(text);
        activities.forEach(function (result) {
            if (result.innerHTML.toLowerCase().indexOf(text.toLowerCase()) < 0) {
                result.parentElement.classList.add("hidden");
            } else {
                result.parentElement.classList.remove("hidden");
            }
        })
    })
}

loadEvents();