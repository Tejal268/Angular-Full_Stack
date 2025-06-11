package com.example.demo.Repos;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Employee;



public interface MyRepo extends JpaRepository<Employee, Integer>{
}
