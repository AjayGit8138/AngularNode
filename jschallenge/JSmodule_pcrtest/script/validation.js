export function formvalid()
{
    
var pname = document.myForm.personname;
var aadhar = document.myForm.aadhar;
var dob = document.myForm.dateofbirth;
var city = document.myForm.city;
var testdate = document.myForm.dateoftest;
var testtime = document.myForm.currenttime;
var labname = document.myForm.labname;
var report = document.myForm.reportno;
var result= document.myForm.result;
var gender1 = document.myForm.gender;

    console.log(pname);
    console.log(aadhar);
    
    if(pname.value === "")
    {
        pname.style.border = "1px solid red";
        alert("name field should be required");
        pname.focus();
        return true;
    }
    else if(aadhar.value === "")
    {
        aadhar.style.border = "1px solid red";
        alert("aahar input field shold be requierd");
        aadhar.focus();
        return true;
    }
    else if(dob.value === "")
    {
        dob.style.border = "1px solid red";
        alert("DateofBirth required");
        dob.focus();
        return true;
    }
    else if(city.value === "")
    {
        city.style.border = "1px solid red";
        city.focus();
        alert("city value is required");
        return true;
    }
    else if(testdate === "")
    {
        testdate.style.border = "1px solid red";
        testdate.focus();
        alert("testdate should be required");
        return true;
    }
    else if(testtime === "")
    {
        testtime.style.border = "1px solid red";
        testtime.focus();
        alert("testime should be required");
        return true;
    }
    else if(labname.value === "")
    {
        labname.style.border = "1px solid red";
        labname.focus();
        alert("Labname should be enter");
        return true;
    }
    else if(report.value === "")
    {
        report.style.border = "1px solid red";
        report.focus();
        alert("report value should be enter");
        return true;
    }
    else if(result.value === "")
    {
        result.style.border = "1px solid red";
        result.focus();
        alert("result should be selected");
        return true;
    }
    else if(gender1.value === "")
    {
        gender1.style.border = "1px solid red";
        gender1.focus();
        alert("Please select a gender option!");
        return true;
    }
    else{
        return false;
    }
   
}
