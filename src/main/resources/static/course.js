$(document).ready(function() {
    $("form").submit(function(e){
        e.preventDefault();
    });
    viewAllCourses();
});

function viewAllCourses(){
    $.ajax({
        url : "/course/getAllCourses",
        type : "GET",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : 'json',
        success: function (responseText) {
            for (i = 0; i<responseText.payload.length; i++) {
                $('#courseTbody').append(
                    "<tr>"
                    +"<td class=\"hide_me\">"
                    +responseText.payload[i].courseId
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].courseName
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].startDate
                    +"</td>"
                    +"<td>"
                    +responseText.payload[i].status
                    +"</td>"
                    +"<td>"
                    +"<button onclick=\"editCourse("+responseText.payload[i].courseId+")\" class=\"btn btn-primary shadow btn-xs sharp\">Edit</button>"
                    +"</td>"
                    +"<td>"
                    +"<button onclick=\"deleteCourse("+responseText.payload[i].courseId+")\" class=\"btn btn-danger shadow btn-xs sharp\">Delete</button>"
                    +"</td>"
                    +"</td>"
                    +"</tr>" );

            }
            $('#courseTable').DataTable();

        },
        error : function(e) {
            // alert(e);
            console.log(e)
        }
    });
}

function saveCourse() {
    var courseName = $("#courseName").val();
    var startDate = $("#startDate").val();
    var status = $("#status").val();

    var requestObj = {
        courseName : courseName,
        startDate : startDate,
        status : status
    }
    $.ajax({
        url : "/course/saveCourse",
        type : "POST",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : "json",
        data : JSON.stringify(requestObj),
        success : function(data) {
            alert("Course Saved Successfully");
            location.reload();
        },
        error : function(data) {
            alert("Course Saving Error");
        }
    });
    location.reload();
}

function deleteCourse(courseId){
    $.ajax({
        url: "/course/deleteCourse/"+ courseId,
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

function editCourse(courseId) {
    $("#update_modal").modal();
    $.ajax({
        url: "/course/findCourseById/"+courseId,
        type:"GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        dataType:"json",
        success: function (responseText) {
            document.getElementById("upCourseId").value = responseText.payload.courseId;
            document.getElementById("upCourseName").value = responseText.payload.courseName;
            document.getElementById("upStartDate").value = responseText.payload.startDate;
            document.getElementById("upStatus").value = responseText.payload.status;

        }
    });

}

function updateCourse() {
    var courseId = $("#upCourseId").val();
    var courseName = $("#upCourseName").val();
    var startDate = $("#upStartDate").val();
    var status = $("#upStatus").val();

    var requestObj = {
        courseId : courseId,
        courseName : courseName,
        startDate : startDate,
        status : status
    }
    $.ajax({
        url : "/course/updateCourse",
        type : "PUT",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : "json",
        data : JSON.stringify(requestObj),
        success : function(data) {
            alert("Course Updated Successfully");
            location.reload();
        },
        error : function(data) {
            alert("Course Updating Error");
        }
    });
    location.reload();
}
