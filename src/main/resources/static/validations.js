function clearAllStu(){
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").selectedIndex = 0;
    document.getElementById("address").value = "";
}

function clearInput(id){
    document.getElementById(id).value = "";
}

function onlyChar(id){
    var input = document.getElementById(id).value;
    if(!/^[a-zA-Z]*$/g.test(input)){
        alert("Please Type Only Letters");
        clearInput(id);
        return false;
    }
}

function getAge(inputDate) {
    var today = new Date();
    var birthDate = new Date(inputDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function checkAge(id) {
    var inputDate = document.getElementById(id).value;
    var enteredAge = getAge(inputDate);
    if (enteredAge <= 10) {
        alert("Age is not above 10");
        clearInput(id);
        return false;
    }
}

function validatePhone(id){
    var num = document.getElementById(id).value;
    var isphone = num.match(/\d/g).length===10;
    if(!isphone){
        alert("Phone Number is Invalid");
        clearInput(id);
        return false;
    }
}

function validateEmail(id) {
    var email = document.getElementById(id).value;
    var re = /\S+@\S+\.\S+/;
    var isEmail = re.test(email);
    if(!isEmail){
        alert("Please Enter a Valid Email");
        clearInput(id);
        return false;
    }
}

function clearAllCourse(){
    document.getElementById("courseName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("status").selectedIndex = 0;
}

/*function clearInput(id){
    document.getElementById(id).value = "";
}*/

/*function onlyChar(id){
    var input = document.getElementById(id).value;
    if(!/^[a-zA-Z]*$/g.test(input)){
        alert("Please Type Only Letters");
        clearInput(id);
        return false;
    }
}*/

function isFutureDate(id){
    var inputDate = document.getElementById(id).value;
    var curDate = new Date(inputDate);
    var today = new Date();

    if(curDate<today){
        alert("Please Select Future Date");
        clearInput(id);
    }
}