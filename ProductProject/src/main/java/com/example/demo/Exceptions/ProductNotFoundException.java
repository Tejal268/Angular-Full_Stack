package com.example.demo.Exceptions;

public class ProductNotFoundException  extends RuntimeException{

	public ProductNotFoundException(String msg) {
		super(msg);
	}
}
