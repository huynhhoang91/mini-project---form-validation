
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitButton").click(function() {
    var errorMessage = "";
    var fieldMissing = "";

    if ($("#email").val() == "") {
        fieldMissing += "<p>Email</p>";
    }

    if ($("#phone").val() == "") {
        fieldMissing += "<p>Telephone</p>";
    }

    if ($("#password").val() == "") {
        fieldMissing += "<p>Password</p>";
    }

    if ($("#passwordConfirm").val() == "") {
        fieldMissing += "<p>Confirm Password</p>";
    }

    if (fieldMissing != "") {
        errorMessage += "<p>The following field(s) are missing:</p>" + fieldMissing;
    }

    if (isEmail($("#email").val()) == false) {
        errorMessage += "<p>You email address is not valid</p>";
    }

    if ($.isNumeric($("#phone").val()) == false) {
        errorMessage += "<p>Your phone number is not numeric</p>";
    }

    if ($("#password").val() != $("#passwordConfirm").val()) {
        errorMessage += "<p>Your password don't match</p>";
    }

    if (errorMessage != "") {
        $("#errorMessage").html(errorMessage);
    } else {
        $("#successMessage").show();
        $("#errorMessage").hide();
    }
});