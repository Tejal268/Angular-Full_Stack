package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "product") 
public class Product {
	
	@Id
	private int id;
	private String name;
	@Column(name = "description")
	private String desc;
	private int price;
	

}
