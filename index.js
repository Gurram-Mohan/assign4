// Hardcoded database
var phone = 1234;
var pass = "text";

function login() {
    var userPhone = parseInt(document.getElementById("number").value);
    var userPass = document.getElementById("password").value;
    const result = document.getElementById("res");



    if(checkPhone(userPhone,(isnum)=>{
        if(isnum){
            checkPass(userPass,(ispass) =>{
                if(ispass){
                    result.style.color = "green";
                    result.innerText = "Login successful!";
                }
                else{
                    result.style.color = "orange";
                    result.innerText = "Invalid Password";
                }
            });
        }else{
            result.style.color = "red";
            result.innerText = "Invalid User";
        }
    }));
}

/*
    if (checkPhone(userPhone)) {
        if (checkPass(userPass)) {
            result.style.color = "green";
            result.innerText = "Login successful!";
        } else {
            result.style.color = "orange";
            result.innerText = "Invalid Password";
        }
    } else {
        result.style.color = "red";
        result.innerText = "Invalid User";
    }
    return false;
}


// Check phone function
function checkPhone(p) {
    return p === phone;
}

// Check password function
function checkPass(pwd) {
    return pwd === pass;
}
*/

function checkPhone(n,callback){
    if(n == phone){
        callback(true);
    }
    else{
        callback(false);
    }
}

function checkPass(p,callback){
    if(p == pass){
        callback(true);
    }
    else{
        callback(false);
    }
}
