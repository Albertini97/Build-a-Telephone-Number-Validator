document.getElementById("check-btn").addEventListener("click", function() {
    var phoneNumber = document.getElementById("user-input").value;
    if (!phoneNumber) {
        alert("Please provide a phone number");
        return;
    }
    var regex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    if (regex.test(phoneNumber)) {
        document.getElementById("results-div").innerHTML = "Valid US number: " + phoneNumber;
    } else {
        document.getElementById("results-div").innerHTML = "Invalid US number: " + phoneNumber;
    }
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("results-div").innerHTML = "";
});
