package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Product;

public interface CurdRepo extends JpaRepository<Product, Integer> {
}
