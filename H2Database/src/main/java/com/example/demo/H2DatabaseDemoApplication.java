package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class H2DatabaseDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(H2DatabaseDemoApplication.class, args);
		System.out.println("Demo of H2 database");
	}

}
