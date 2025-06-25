package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Student;
import com.example.demo.Repos.MyRepo;

import java.util.List;

@RestController
//@RequestMapping("/students") 
public class StudentController {

    @Autowired
    private MyRepo repo;

    @GetMapping("/getall")
    public List<Student> getAll() {
        return repo.findAll();
    }

    @PostMapping("/add")
    public Student add(@RequestBody Student student) {
        return repo.save(student);
    }
    
    
    
}
