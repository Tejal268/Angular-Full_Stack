package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;



import com.example.demo.Entity.Product;
import com.example.demo.Exceptions.ProductNotFoundException;
import com.example.demo.Repos.MyRepo;


@Service
public class MyServices {

    @Autowired
    private MyRepo repo;

    public List<Product> getAllProduct() {
        return repo.findAll();
    }

    public Product getProductById(int id) {
        return repo.findById(id).orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
    }


    public String addProduct(Product prod) {
        repo.save(prod);
        return "Product added successfully!";
    }

    public String updateProduct(int id, Product updatedProduct) {
        Optional<Product> existingProduct = repo.findById(id);
        if (existingProduct.isPresent()) {
            Product prod = existingProduct.get();
            prod.setPname(updatedProduct.getPname());
            prod.setPrice(updatedProduct.getPrice());
            prod.setReview(updatedProduct.getReview());
            repo.save(prod);
            return "Product updated successfully!";
        } else {
            return "Product not found with ID: " + id;
        }
    }

    public String deleteProduct(int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return "Product deleted successfully!";
        } else {
            return "Product not found with ID: " + id;
        }
    }

    public String deleteAllProducts() {
        repo.deleteAll();
        return "All Data Deleted ....!";
    }
}