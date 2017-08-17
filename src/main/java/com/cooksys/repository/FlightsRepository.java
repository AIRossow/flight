package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.pojo.Flight;

@Repository
public interface FlightsRepository extends JpaRepository<Flight, Long> {

	
}
