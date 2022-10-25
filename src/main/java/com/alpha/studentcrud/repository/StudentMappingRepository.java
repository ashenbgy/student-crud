package com.alpha.studentcrud.repository;

import com.alpha.studentcrud.entity.StudentMappingCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentMappingRepository extends JpaRepository<StudentMappingCourse, Integer> {
}
