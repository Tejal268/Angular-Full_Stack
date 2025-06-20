package com.example.demo.Repos;
import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.Entity.Product;



public interface MyRepo extends JpaRepository<Product, Integer>{
}
