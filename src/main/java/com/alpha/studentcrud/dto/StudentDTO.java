package com.alpha.studentcrud.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentDTO {
    private int stuId;
    private String firstName;
    private String lastName;
    private Date dob;
    private String phone;
    private String email;
    private String gender;
    private String address;
}
