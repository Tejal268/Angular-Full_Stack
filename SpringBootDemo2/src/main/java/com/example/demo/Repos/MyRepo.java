package com.example.demo.Repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.Employee;

@Repository
public interface MyRepo extends JpaRepository<Employee, Integer> {

	Optional<Employee> findByName(String name);
	List<Employee> findByDesigIgnoreCase(String desig);
	void deleteByNameIgnoreCase(String name);
	  List<Employee> findBySalaryBetween(double min, double max);

}
