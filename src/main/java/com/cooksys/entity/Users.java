package com.cooksys.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.cooksys.pojo.Flight;


@Entity
@Table(name = "Users")
public class Users {

	@Id
	@GeneratedValue
	private long id;
	
	@Column(name = "username")
	private String username = "";
	@Column(name = "password")
	private String password = "";
	@OneToMany
	@Column(name = "bookedFlights")
	private Set<Flight> bookedFlights = new HashSet<>();
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public void addFlight(Flight flight) {
		this.bookedFlights.add(flight);
	}
}