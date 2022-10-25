package com.alpha.studentcrud.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentMappingDTO {
    private int smcId;
    private int stuId;
    private int courseId;
    private String stuName;
    private String courseName;
    private String startDate;
    private String phone;
}
