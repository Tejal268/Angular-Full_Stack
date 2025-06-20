package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
public class Product {
	
	   @Id
	   private int pid;
	   @NotNull(message="Name cannot be null")
		@Pattern(regexp = "^[a-zA-Z]*$", message = "Name must contain only characters")
	    private String pname;
	   
	    private double price;
	    private String review;

	    
}
