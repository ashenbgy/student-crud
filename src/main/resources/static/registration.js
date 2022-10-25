$(document).ready(function() {
    $("form").submit(function(e){
        e.preventDefault();
    });
    viewAllStudents();
    viewAllCourses();
    viewAllRegStudents();
});

function viewAllCourses() {
    $.ajax({
        url : "/course/getAllCourses",
        type : "GET",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : 'json',
        success : function(responseText) {
            for (j = 0; j < responseText.payload.length; j++) {
                $('#regCourse').append(
                    "<option value=" + responseText.payload[j].courseId
                    + ">" + responseText.payload[j].courseName
                    + "</option>").trigger("chosen:updated");
            }
        },
        error : function(e) {
            // alert(e);
            console.log(e)
        }
    });
}

function viewAllStudents() {
    $.ajax({
        url : "/student/getAllStudents",
        type : "GET",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : 'json',
        success : function(responseText) {
            for (j = 0; j < responseText.payload.length; j++) {
                $('#regStudent').append(
                    "<option value=" + responseText.payload[j].stuId
                    + ">" + responseText.payload[j].firstName + " " + responseText.payload[j].lastName
                    + "</option>").trigger("chosen:updated");
            }
        },
        error : function(e) {
            // alert(e);
            console.log(e)
        }
    });
}

function fillCourseData() {
    var courseId = document.getElementById("regCourse").value;
    $.ajax({
        url: "/course/findCourseById/"+courseId,
        type:"GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        dataType:"json",
        success: function (responseText) {
            document.getElementById("regCourseId").value = responseText.payload.courseId;
            document.getElementById("regCourseName").value = responseText.payload.courseName;
            document.getElementById("regStartDate").value = responseText.payload.startDate;

        }
    });

}

function fillStudentData() {
    var stuId = document.getElementById("regStudent").value;
    $.ajax({
        url: "/student/findStudentById/"+stuId,
        type:"GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        dataType:"json",
        success: function (responseText) {
            document.getElementById("regStuId").value = responseText.payload.stuId;
            document.getElementById("regStuName").value = responseText.payload.firstName + " " + responseText.payload.lastName;
            document.getElementById("regPhone").value = responseText.payload.phone;

        }
    });

}

function register (){
    var stuId = $("#regStuId").val()
    var courseId = $("#regCourseId").val();
    var stuName = $("#regStuName").val();
    var courseName = $("#regCourseName").val();
    var startDate = $("#regStartDate").val();
    var phone = $("#regPhone").val();

    var requestObj = {
        stuId : stuId,
        courseId : courseId,
        stuName : stuName,
        courseName : courseName,
        startDate : startDate,
        phone : phone
    }
    $.ajax({
        url : "/student/registerStudent",
        type : "POST",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : "json",
        data : JSON.stringify(requestObj),
        success : function(data) {
            alert("Registered Successfully");
            location.reload();
        },
        error : function(data) {
            alert("Registration Error");
        }
    });
    location.reload();
}

function viewAllRegStudents(){
    $.ajax({
        url : "/student/getAllRegStudents",
        type : "GET",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : 'json',
        success: function (responseText) {
            for (i = 0; i<responseText.payload.length; i++) {
                $('#stuCourseTbody').append(
                    "<tr>"
                    +"<td class=\"hide_me\">"
                    +responseText.payload[i].stuName
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].courseName
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].startDate
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].phone
                    +"</td>"
                    +"</tr>" );

            }
            $('#stuCOurseTable').DataTable();

        },
        error : function(e) {
            // alert(e);
            console.log(e)
        }
    });
}