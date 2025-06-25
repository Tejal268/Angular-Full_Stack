package com.example.demo.Repos;
import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.Entity.Student;



public interface MyRepo extends JpaRepository<Student, Long>{
}
