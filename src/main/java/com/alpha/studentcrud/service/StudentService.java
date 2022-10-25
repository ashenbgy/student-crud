package com.alpha.studentcrud.service;

import com.alpha.studentcrud.dto.StudentDTO;
import com.alpha.studentcrud.dto.StudentMappingDTO;
import com.alpha.studentcrud.entity.Course;
import com.alpha.studentcrud.entity.Student;
import com.alpha.studentcrud.entity.StudentMappingCourse;
import com.alpha.studentcrud.repository.CourseRepository;
import com.alpha.studentcrud.repository.StudentMappingRepository;
import com.alpha.studentcrud.repository.StudentRepository;
import com.alpha.studentcrud.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private StudentMappingRepository studentMappingRepository;

    public void saveStudent(StudentDTO studentDTO) {
        Student student = new Student();
        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());
        student.setDob(studentDTO.getDob());
        student.setPhone(studentDTO.getPhone());
        student.setEmail(studentDTO.getEmail());
        student.setGender(studentDTO.getGender());
        student.setAddress(studentDTO.getAddress());
        studentRepository.save(student);
    }

    public Response getAllStudents() {
        List<Student> studentList = studentRepository.findAll();
        Response response = new Response();
        response.setPayload(studentList);
        return response;
    }

    public Response getStudentById(int stuId) {
        Student student = studentRepository.findById(stuId).orElse(null);
        Response response = new Response();
        response.setPayload(student);
        return response;
    }

    public void deleteStudent(int stuId) {
        studentRepository.deleteById(stuId);
    }

    public void updateStudent(StudentDTO studentDTO) {
        Student student = new Student();
        student.setStuId(studentDTO.getStuId());
        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());
        student.setDob(studentDTO.getDob());
        student.setPhone(studentDTO.getPhone());
        student.setEmail(studentDTO.getEmail());
        student.setGender(studentDTO.getGender());
        student.setAddress(studentDTO.getAddress());
        studentRepository.save(student);
    }

    public void registerStudent(StudentMappingDTO studentMappingDTO) {
        StudentMappingCourse studentMappingCourse = new StudentMappingCourse();
        Student student = studentRepository.findById(studentMappingDTO.getStuId()).get();
        Course course = courseRepository.findById(studentMappingDTO.getCourseId()).get();

        studentMappingCourse.setStudent(student);
        studentMappingCourse.setCourse(course);
        studentMappingCourse.setStuName(studentMappingDTO.getStuName());
        studentMappingCourse.setCourseName(studentMappingDTO.getCourseName());
        studentMappingCourse.setStartDate(studentMappingDTO.getStartDate());
        studentMappingCourse.setPhone(studentMappingDTO.getPhone());
        studentMappingRepository.save(studentMappingCourse);
    }

    public Response getAllRegStudents() {
        List<StudentMappingCourse> regStudentList = studentMappingRepository.findAll();
        Response response = new Response();
        response.setPayload(regStudentList);
        return response;
    }
}
