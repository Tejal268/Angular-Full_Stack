package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Product {
	
	@Id
	private int id;
	private String name;
	private String desc;
	private int price;
	

}
