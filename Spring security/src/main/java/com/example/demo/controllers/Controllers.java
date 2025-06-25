package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controllers {
	
	@GetMapping("home")
	public String home() {
		return "Home page";
	}
	
	@GetMapping("xyz")
	public String xyz() {
		return "xyz page";
	}

}
