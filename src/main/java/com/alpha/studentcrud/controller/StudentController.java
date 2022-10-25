package com.alpha.studentcrud.controller;

import com.alpha.studentcrud.dto.StudentDTO;
import com.alpha.studentcrud.dto.StudentMappingDTO;
import com.alpha.studentcrud.service.StudentService;
import com.alpha.studentcrud.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/findStudentById/{stuId}")
    public Response findStudentById(@PathVariable("stuId") int stuId ) {
        return studentService.getStudentById(stuId);
    }

    @GetMapping("/getAllStudents")
    public Response getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/saveStudent")
    public void saveStudent(@RequestBody StudentDTO studentDTO) {
        studentService.saveStudent(studentDTO);
    }

    @PutMapping("/updateStudent")
    public void updateStudent(@RequestBody StudentDTO studentDTO) {
        studentService.updateStudent(studentDTO);
    }

    @PutMapping("/deleteStudent/{stuId}")
    public void deleteStudent(@PathVariable(name = "stuId") int stuId) {
        studentService.deleteStudent(stuId);
    }

    @PostMapping("/registerStudent")
    public void registerStudent(@RequestBody StudentMappingDTO studentMappingDTO) {
        studentService.registerStudent(studentMappingDTO);
    }

    @GetMapping("/getAllRegStudents")
    public Response getAllRegStudents() {
        return studentService.getAllRegStudents();
    }

}
