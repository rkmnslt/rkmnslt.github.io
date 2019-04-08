function checkNumber(fieldValue) {
    var numberCheck = isNaN(fieldValue);
    if (numberCheck == true) {
        window.alert("Enter the valid number please");
        return false;
    }
    else {
        return true;
    }
}

function checkEmail(fieldValue) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue)) {
        return true;
    }
    else {
        alert("Enter the valid e-mail address please");
        return false;
    }

}

function checkName(fieldValue) {
    var nameCheck = fieldValue;
    if (nameCheck == "") {
        window.alert("Enter name please");
        return false;
    }
    else {
        return true;
    }

}

function showAlert() {
    if (document.getElementById("name").value !== "") {
        if (document.getElementById("e-mail").value || document.getElementById("phone").value !== "") {
            alert("Thank you for your interest to our team! We will contact with you in few hours");
            document.getElementById("name").value = "";
            document.getElementById("e-mail").value = "";
            document.getElementById("phone").value = "";
        }
        else {
            alert("Enter e-mail address or phone number please")
        }
    }
    else {
        alert("Enter the name and e-mail or phone number please")
    }
}