package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class CurdDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CurdDemoApplication.class, args);
		System.out.println("fine");
	}
	

}
