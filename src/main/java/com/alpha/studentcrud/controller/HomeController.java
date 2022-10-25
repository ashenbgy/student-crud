package com.alpha.studentcrud.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {

    @GetMapping(value = "index")
    public String homePage() {
        return "index.html";
    }

    @GetMapping(value = "course")
    public String coursePage() {
        return "course.html";
    }

    @GetMapping(value = "course/addCourse")
    public String addCoursePage() {
        return "addCourse.html";
    }

    @GetMapping(value = "student")
    public String studentPage() {
        return "student.html";
    }

    @GetMapping(value = "student/addStudent")
    public String addStudentPage() {
        return "addStudent.html";
    }

    @GetMapping(value = "register")
    public String registrationPage() {
        return "registration.html";
    }

}
