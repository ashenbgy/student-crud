package com.alpha.studentcrud.controller;

import com.alpha.studentcrud.dto.CourseDTO;
import com.alpha.studentcrud.service.CourseService;
import com.alpha.studentcrud.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/findCourseById/{courseId}")
    public Response findCourseById(@PathVariable("courseId") int courseId ) {
        return courseService.getCourseById(courseId);
    }

    @GetMapping("/getAllCourses")
    public Response getAllCourses() {
        return courseService.getAllCourses();
    }

    @PostMapping("/saveCourse")
    public void saveCourse(@RequestBody CourseDTO courseDTO) {
        courseService.saveCourse(courseDTO);
    }

    @PutMapping("/updateCourse")
    public void updateCourse(@RequestBody CourseDTO courseDTO) {
        courseService.updateCourse(courseDTO);
    }

    @PutMapping("/deleteCourse/{courseId}")
    public void deleteCourse(@PathVariable("courseId") int courseId ) {
        courseService.deleteCourse(courseId);
    }
}
