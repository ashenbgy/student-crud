package com.alpha.studentcrud.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentDTO {
    private int stuId;
    private String firstName;
    private String lastName;
    private String dob;
    private String phone;
    private String email;
    private String gender;
    private String address;
}
