package com.example.demo.Entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;

@Entity
@Data
public class Employee {
	
	@Id
	private int id;
	private String name;
	private int age;
	private int salary;
	private String desig;
	
	
	
	
}
