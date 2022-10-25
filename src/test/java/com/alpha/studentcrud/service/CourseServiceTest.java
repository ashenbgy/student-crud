package com.alpha.studentcrud.service;

import com.alpha.studentcrud.entity.Course;
import com.alpha.studentcrud.repository.CourseRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.text.ParseException;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
class CourseServiceTest {

    @Mock
    private CourseRepository courseRepository;

    @InjectMocks
    private CourseService courseService;

    @Test
    void saveCourse() {
        Course course = new Course();
        course.setCourseName("English");
        course.setStartDate(new Date());
        course.setStatus("active");

        when(courseRepository.save(ArgumentMatchers.any(Course.class))).thenReturn(course);

        verify(courseRepository).save(course);

    }
}