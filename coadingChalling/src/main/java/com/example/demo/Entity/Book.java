package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class Book {
    @Id
    private int isbn;

    private String title;

    @NotBlank
    private String author;

    private int publicationYear;
}
