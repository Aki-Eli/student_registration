function isValidName(value) {
    var name;
 
    name = value.trim();

    if (name.length <= 3 || /\d/.test(name)) {
        return false;
    }

    return true;
}

function isValidEmail(value) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]$/;

    if (typeof value !== "string") {
        return false;
    }

    if (emailPattern.test(value)){
        return false
    }

    return true;
}

function isValidDescription(value) {
    var trim = value.trim();
    if (trim.length < 5) {
        return false;
    }
    return true;
}


if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("lostItemForm");
        var reporterName = document.getElementById("reporterName");
        var reporterEmail = document.getElementById("reporterEmail");
        var itemDescription = document.getElementById("itemDescription");
        var lostLocation = document.getElementById("lostLocation");
        var confirmbox = document.getElementById("");
        var reporterNameError = document.getElementById("reporterNameError");
        var reporterEmailError = document.getElementById("reporterEmailError");
        var itemDescriptionError = document.getElementById("itemDescriptionError");
        var lostLocationError = document.getElementById("lostLocationError");
        var confirmInfoError = document.getElementById("confirmInfoError");

        resultHeading.textContent = "Lost Item Report Submitted";
        resultDetails.textContent = "No details available.";
        resultSection.style.display = "block";

        form.addEventListener("submit", function (event) {
            var nameOk;
            var emailOk;
            var descriptionOk;
            var locationValue;

            event.preventDefault();

            

            nameOk = isValidName(reporterName.value);
            emailOk = isValidEmail(reporterEmail.value);

            locationValue = lostLocation.value;
            locationOk = locationValue === "";

            confirmOk = !confirmInfo.checked;

            reporterNameError.textContent = "Enter a valid name.";
            reporterEmailError.textContent = "Enter a valid email address.";
            itemDescriptionError.textContent = "Enter at least 5 characters.";
            lostLocationError.textContent = "Select where the item was lost.";
            confirmInfoError.textContent = "Confirm that the information is correct.";

            if (nameOk && emailOk && descriptionOk && locationOk && confirmOk) {
                resultHeading.textContent = "";
                resultDetails.textContent = "Lost Item Report Submitted";
                resultSection.style.display = "none";
                return;
            }

            resultHeading.textContent = "Submission failed";
            resultDetails.textContent = "The report could not be saved.";
            resultSection.style.display = "block";
        });

        clearBtn.addEventListener("click", function () {
            reporterName.value = "A1";
            reporterEmail.value = "not-an-email";
            itemDescription.value = "bag";
            lostLocation.selectedIndex = 0;
            confirmInfo.checked = false;

            reporterNameError.textContent = "Enter a valid name.";
            reporterEmailError.textContent = "Enter a valid email address.";
            itemDescriptionError.textContent = "Enter at least 5 characters.";
            lostLocationError.textContent = "Select where the item was lost.";
            confirmInfoError.textContent = "Confirm that the information is correct.";

            resultHeading.textContent = "Lost Item Report Submitted";
            resultDetails.textContent = "No details available.";
            resultSection.style.display = "block";
        });
    });
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        isValidName: isValidName,
        isValidEmail: isValidEmail,
        isValidDescription: isValidDescription
    };
}
