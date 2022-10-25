package com.alpha.studentcrud.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseDTO {
    private int courseId;
    private String courseName;
    private String startDate;
    private String status;
}
