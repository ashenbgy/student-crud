package com.alpha.studentcrud.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentMappingDTO {
    private int smcId;
    private int stuId;
    private int courseId;
    private String stuName;
    private String courseName;
    private String startDate;
    private String phone;
}
