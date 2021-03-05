document.getElementById("pets").addEventListener('click', function () {
    document.getElementById("dropdown").classList.toggle("hidden");
})

var form = document.getElementById("client-form")

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(validate()){
        alert("Booking Saved.");
    }
})

function validate() {
    var valid = true;
    if(document.getElementById("name").value == ''){
        document.getElementById("name-error").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("name-error").classList.add("hidden");
    }
    if(document.getElementById("address").value == '') {
        document.getElementById("address-error").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("address-error").classList.add("hidden");
    }
    if(document.getElementById("age").value == '') {
        document.getElementById("age-error").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("age-error").classList.add("hidden");
    }

    return valid;
}
