package com.alpha.studentcrud.service;

import com.alpha.studentcrud.dto.CourseDTO;
import com.alpha.studentcrud.entity.Course;
import com.alpha.studentcrud.repository.CourseRepository;
import com.alpha.studentcrud.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public void saveCourse(CourseDTO courseDTO) {
        Course course = new Course();
        course.setCourseName(courseDTO.getCourseName());
        course.setStartDate(courseDTO.getStartDate());
        course.setStatus(courseDTO.getStatus());
        courseRepository.save(course);
    }

    public Response getAllCourses() {
        List<Course> courseList = courseRepository.findAll();
        Response response = new Response();
        response.setPayload(courseList);
        return response;
    }

    public Response getCourseById(int courseId) {
        Course course = courseRepository.findById(courseId).orElse(null);
        Response response = new Response();
        response.setPayload(course);
        return response;
    }

    public void deleteCourse(int courseId) {
        courseRepository.deleteById(courseId);
    }

    public void updateCourse(CourseDTO courseDTO) {
        Course course = new Course();
        course.setCourseId(courseDTO.getCourseId());
        course.setCourseName(courseDTO.getCourseName());
        course.setStartDate(courseDTO.getStartDate());
        course.setStatus(courseDTO.getStatus());
        courseRepository.save(course);
    }
}
