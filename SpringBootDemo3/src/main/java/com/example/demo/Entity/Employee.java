package com.example.demo.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Employee {

	@Id
	private int id;
	
	@NotNull(message="Name cannot be null")
	 @Pattern(regexp = "^[a-zA-Z]*$", message = "Name must contain only characters")
	private String name;
	
    @Max(value = 60, message = "Age cannot be more than 60")
    @Min(value = 18, message = "Age cannot be less than 18")
	private int age;
    
    @Min(value = 25000, message = "Salary must be more than 25000")
	private int salary;
    
    @NotNull(message = "You must pass the designation")
	private String desig;
	
}