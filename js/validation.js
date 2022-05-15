//contactUs
function check() {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var tarea = document.getElementById("tarea").value;
    var np = /^[a-zA-z. ]+$/
    var ep = /(cse|eee|ce|arch|law|bba|eng|bng)_\d{10}@lus\.ac\.bd/

    if (name.length < 1) {
        document.getElementById("efi").style.display = "inline-block";
        document.getElementById("efname").innerHTML = "Enter your Name";
        return false;
    } if (!name.match(np)) {
        document.getElementById("efi").style.display = "inline-block";
        document.getElementById("efname").innerHTML = "**Only Characters are allowed!!";
        return false;
    } else {
        document.getElementById("efi").style.display = "none";
        document.getElementById("efname").innerHTML = "";

    }

    if (!email.match(ep)) {
        document.getElementById("eei").style.display = "inline-block";
        document.getElementById("eemail").innerHTML = "Please enter your institutional email!!";
        return false;
    } else {
        document.getElementById("eei").style.display = "none";
        document.getElementById("eemail").innerHTML = "";
    }

    if (tarea.length < 1) {
        document.getElementById("eti").style.display = "inline-block";
        document.getElementById("etarea").innerHTML = "Please write something!!";
        return false;
    } else {
        document.getElementById("eti").style.display = "none";
        document.getElementById("etarea").innerHTML = "";
    }
}

//Registration form
function formValidation() {
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var pass = document.getElementById('pass').value.trim();
    var cpass = document.getElementById('cpass').value.trim();
    var jsc = document.getElementById('jsc');
    var ssc = document.getElementById('ssc');
    var hsc = document.getElementById('hsc');
    var bsc = document.getElementById('bsc');
    var msc = document.getElementById('msc');


    var np = /[a-zA-z. ]+$/
    var mp = /(\+88)?0 ?1[3-9]\d{2}-?\d{6}/
    var ep = /(cse|eee|ce|arch|law|bba|eng|bng)_\d{10}@lus\.ac\.bd/
    var pp = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*?><+_-])).{8,20}/

    if (fname.length < 3 || fname.length > 20) {
        document.getElementById("efname").innerHTML = "**Length must be in between 3-20!!";
        return false
    } if (!fname.match(np)) {
        document.getElementById("efname").innerHTML = "**Only Characters are allowed!!";
        return false
    } else {
        document.getElementById("efname").innerHTML = "";
    }

    if (lname.length < 3 || lname.length > 20) {
        document.getElementById("elname").innerHTML = "**Length must be in between 3-20!!";
        return false
    } else if (!lname.match(np)) {
        document.getElementById("elname").innerHTML = "**Only Characters are allowed!!";
        return false
    } else {
        document.getElementById("elname").innerHTML = "";
    }

    if (!email.match(ep)) {
        document.getElementById("eemail").innerHTML = "**Please enter your institutional email!!";
        return false
    } else {
        document.getElementById("eemail").innerHTML = "";
    }

    if (!mobile.match(mp)) {
        document.getElementById("emobile").innerHTML = "**Please enter a Valid mobile number!!";
        return false
    } else {
        document.getElementById("emobile").innerHTML = "";
    }

    if (!pass.match(pp)) {
        document.getElementById("epass").innerHTML = "**1 upper, 1 lower, 1 digit, 1 sp, length 8-12!!";
        return false
    } else {
        document.getElementById("epass").innerHTML = "";
    }
    if (!cpass.match(pp)) {
        document.getElementById("ecpass").innerHTML = "**1 upper, 1 lower, 1 digit, 1 sp, length 8-12!!";
        return false
    } else {
        document.getElementById("ecpass").innerHTML = "";
    }
    if (pass !== cpass) {
        document.getElementById("epass").innerHTML = "**Password Mismatch!!";
        document.getElementById("ecpass").innerHTML = "**Password Mismatch!!";
        return false
    } else {
        document.getElementById("ecpass").innerHTML = "";
    }
}


//Login Validation

function loginValidation() {
    var email = document.getElementById('email').value.trim();
    var pass = document.getElementById('pass').value.trim();

    var ep = /(cse|eee|ce|arch|law|bba|eng|bng)_\d{10}@lus\.ac\.bd/
    var pp = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*?><+_-])).{8,20}/

    if (!email.match(ep)) {
        document.getElementById("eemail").innerHTML = "**Please enter your institutional email!!";
        return false
    } else {
        document.getElementById("eemail").innerHTML = "";
    }

    if (!pass.match(pp)) {
        document.getElementById("epass").innerHTML = "**1 upper, 1 lower, 1 digit, 1 sp, length 8-12!!";
        return false
    } else {
        document.getElementById("epass").innerHTML = "";
    }
}
