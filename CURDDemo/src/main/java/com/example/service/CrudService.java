package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Product;
import com.example.repo.CurdRepo;

@Service
public class CrudService {

    @Autowired
    private CurdRepo repo;

    // Get all products
    public List<Product> fetchProductList() {
        return repo.findAll();  // SELECT * FROM product;
    }

    // Get product by ID
    public Optional<Product> fetchProductListById(int id) {
        return repo.findById(id);  // SELECT * FROM product WHERE id = ?;
    }

    // Save or update a product
    public Product saveProductToBD(Product product) {
        return repo.save(product);  // INSERT or UPDATE based on ID
    }

    // Delete product by ID
    public String deleteProductListById(int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);  // DELETE FROM product WHERE id = ?
            return "Product deleted successfully with ID: " + id;
        } else {
            return "Product not found with ID: " + id;
        }
    }
}
