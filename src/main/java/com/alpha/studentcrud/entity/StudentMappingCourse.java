package com.alpha.studentcrud.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "stu_course")
public class StudentMappingCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "stu_map_id")
    private int smcId;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Course Course;

    @Column(name = "stu_name")
    private String stuName;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "start_date")
    private String startDate;

    @Column(name = "phone")
    private String phone;

}
