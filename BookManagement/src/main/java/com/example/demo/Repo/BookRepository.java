package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Book;


public interface BookRepository extends JpaRepository<Book, Long> {
}
