// Hardcoded database
var phone = 1234;
var pass = "text";

function login() {
    var userPhone = parseInt(document.getElementById("number").value);
    var userPass = document.getElementById("password").value;

    checkPhone(userPhone, (isnum) => {
        if (isnum) {
            checkPass(userPass, (ispass) => {
                if (ispass) {
                    alert("Login successful!");
                } else {
                    alert("Invalid Password");
                }
            });
        } else {
            alert("Invalid User");
        }
    });

    return false; // Prevent form submission
}

function checkPhone(n, callback) {
    if (n == phone) {
        callback(true);
    } else {
        callback(false);
    }
}

function checkPass(p, callback) {
    if (p == pass) {
        callback(true);
    } else {
        callback(false);
    }
}
