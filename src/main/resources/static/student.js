$(document).ready(function() {
    $("form").submit(function(e){
        e.preventDefault();
    });
    viewAllStudents();
});

function viewAllStudents(){
    $.ajax({
        url : "/student/getAllStudents",
        type : "GET",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : 'json',
        success: function (responseText) {
            for (i = 0; i<responseText.payload.length; i++) {
                $('#stuTbody').append(
                    "<tr>"
                    +"<td class=\"hide_me\">"
                    +responseText.payload[i].stuId
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].firstName
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].lastName
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].dob
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].phone
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].email
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].gender
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].address
                    +"</td>"
                    +"<td>"
                    +"<button onclick=\"editStudent("+responseText.payload[i].stuId+")\" class=\"btn btn-primary shadow btn-xs sharp\">Edit</button>"
                    +"</td>"
                    +"<td>"
                    +"<button onclick=\"deleteStudent("+responseText.payload[i].stuId+")\" class=\"btn btn-danger shadow btn-xs sharp\">Delete</button>"
                    +"</td>"
                    +"</td>"
                    +"</tr>" );

            }
            $('#stuTable').DataTable();

        },
        error : function(e) {
            // alert(e);
            console.log(e)
        }
    });
}

function saveStudent() {
    var firstName = $("#fName").val();
    var lastName = $("#lName").val();
    var dob = $("#dob").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var gender = $("#gender").val();
    var address = $("#address").val();

    var requestObj = {
        firstName : firstName,
        lastName : lastName,
        dob : dob,
        phone : phone,
        email : email,
        gender : gender,
        address : address
    }
    $.ajax({
        url : "/student/saveStudent",
        type : "POST",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : "json",
        data : JSON.stringify(requestObj),
        success : function(data) {
            alert("Student Saved Successfully");
            location.reload();
        },
        error : function(data) {
            alert("Student Saving Error");
        }
    });
    location.reload();
}

function deleteStudent(stuId){
    $.ajax({
        url: "/student/deleteStudent/"+ stuId,
        type:"PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType:"json",
        success: function(data) {

            /*  alert("Successfully Delete");*/

        },
        error: function(data){
            /*alert("error");*/
        }
    });
    location.reload();
}

function editStudent(stuId) {
    $("#update_st_modal").modal();
    $.ajax({
        url: "/student/findStudentById/"+stuId,
        type:"GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        dataType:"json",
        success: function (responseText) {
            document.getElementById("upStuId").value = responseText.payload.stuId;
            document.getElementById("upFName").value = responseText.payload.firstName;
            document.getElementById("upLName").value = responseText.payload.lastName;
            document.getElementById("upDob").value = responseText.payload.dob;
            document.getElementById("upPhone").value = responseText.payload.phone;
            document.getElementById("upEmail").value = responseText.payload.email;
            document.getElementById("upGender").value = responseText.payload.gender;
            document.getElementById("upAddress").value = responseText.payload.address;

        }
    });

}

function updateStudent() {
    var stuId = $("#upStuId").val();
    var fName = $("#upFName").val();
    var lName = $("#upLName").val();
    var dob = $("#upDob").val();
    var phone = $("#upPhone").val();
    var email = $("#upEmail").val();
    var gender = $("#upGender").val();
    var address = $("#upAddress").val();

    var requestObj = {
        stuId : stuId,
        firstName : fName,
        lastName : lName,
        dob : dob,
        phone : phone,
        email : email,
        gender : gender,
        address : address
    }
    $.ajax({
        url : "/student/updateStudent",
        type : "PUT",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : "json",
        data : JSON.stringify(requestObj),
        success : function(data) {
            alert("Student Updated Successfully");
            location.reload();
        },
        error : function(data) {
            alert("Student Updating Error");
        }
    });
    location.reload();
}