package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Product;
import com.example.demo.service.MyServices;

import jakarta.validation.Valid;

@RestController
public class MyControler {

    @Autowired
    private MyServices service;

    @GetMapping("/getAllProduct")
    public List<Product> getAllProduct() {
        return service.getAllProduct();
    }

    @GetMapping("/getAllProduct/{id}")
    public Product  getAllProductbyID(@PathVariable int id) {
        return service.getProductById(id);
    }

    @PostMapping("/addProduct")
    public String addProduct(@Valid @RequestBody Product prod) {
        return service.addProduct(prod);
    }

    @PutMapping("/updateProduct/{id}")
    public String updateProduct(@PathVariable int id, @RequestBody Product updatedprod) {
        return service.updateProduct(id, updatedprod);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public String deleteProduct(@PathVariable int id) {
        return service.deleteProduct(id);
    }

    @DeleteMapping("/deleteAllProduct")
    public String deleteAllProduct() {
        return service.deleteAllProducts();
    }
}