let formSubmit = document.getElementById('submit');
formSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    var email = document.getElementById('emailconfirmation');
    var errfname = document.getElementById('fstname');
    var errlstname = document.getElementById('lastname');
    var erremail = document.getElementById('erremail');
    var errpsw = document.getElementById('psw');
    var formsubmit = document.getElementById('submit');
    var fname = document.myForm.Fname;
    var femail = document.myForm.femail;
    var lstname = document.myForm.Lname;
    var psw = document.myForm.password;
    // first name validation
    if (fname.value === "") {

        fname.style.border = "1px solid red";
        fname.focus();
        errfname.innerHTML = "Please Enter Your Name";
        return;

    }
    else{
        fname.style.border = "1px solid black";
        errfname.style.display = "none";
    }
    // lstname validation
    if (lstname.value === "") {
        lstname.focus();
        lstname.style.border = "1px solid red";
        errlstname.innerHTML = "Please Enter Your Last Name";
        return;
    }
    else{
        errlstname.display = "none";
    }
    // Email validation Starts
    if (Email(femail.value)) {
        email.style.border = "1px solid black";
        erremail.style.display = "none";

    }
    else {
        var email = document.getElementById('emailconfirmation');
        email.style.border = "1px solid red";
        var erremail = document.getElementById('erremail');
        erremail.innerHTML = "Enter a valid email Address";
    }
    // email validation Ends

    // Password validation starts


    if (psw.value === "") {

        psw.focus();
        psw.style.border = "1px solid red";
        errpsw.innerHTML = "Password Field should be blank";
        return;

    }
    else if (passwordcheck(Psw.value) != true) {
        psw.focus();
        psw.style.border = "1px solid red";
        errpsw.innerHTML = "Password should be minimum 8 characters and one special charactes and one number";
        return;
    }
    else{
        psw.style.border = "1px solid black";
        errpsw.style.display = "none";
    }
    
})

function Email(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function passwordcheck(password) {
    return /[A-Za-z]*[0-9][A-Za-z]*/.test(password);
}
function submitform()
{
    document.getElementById('submit').submit();
}
