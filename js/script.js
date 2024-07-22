function validateForm(event) {
    event.preventDefault(); 

    var emri = document.getElementById("emri").value;
    var mbiemri = document.getElementById("mbiemri").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var terms = document.getElementById("terms").checked;

    var message = "";
    if (emri === "" || mbiemri === "") {
        message += "Emri dhe Mbiemri janë të detyrueshme.\n";
    }
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        message += "Email-i gabim.\n";
    }
    if (password.length < 8) {
        message += "Password-i duhet të kete  8 karaktere.\n";
    }
    if (password !== confirmPassword) {
        message += "Password-et nuk perputhen.\n";
    }
    if (!terms) {
        message += "Pranoni terms and conditions.\n";
    }
    if (message !== "") {
        alert(message);
    } else {

        alert("U plotesua me sukses!");
        
    }
}