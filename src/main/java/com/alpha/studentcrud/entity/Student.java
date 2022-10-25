package com.alpha.studentcrud.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "STUDENT")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotNull
    @Column(name = "stu_id")
    private int stuId;

    @Size(max = 50)
    @Column(name = "f_name")
    private String firstName;

    @Size(max = 50)
    @Column(name = "l_name")
    private String lastName;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "dob")
    private Date dob;

    @Size(max = 10)
    @Column(name = "phone")
    private String phone;

    @Size(max = 150)
    @Column(name = "email")
    private String email;

    @Size(max = 6)
    @Column(name = "gender")
    private String gender;

    @Size(max = 255)
    @Column(name = "address")
    private String address;

}
