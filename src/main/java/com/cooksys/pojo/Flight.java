package com.cooksys.pojo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.cooksys.entity.Users;

@Entity
@Table(name = "Flights")
public class Flight {
	
	@Id
	@GeneratedValue
	private long id;
	
	//Name of city where flight originates
	@Column
	private String origin;
	
	//Name of city where flight lands
	@Column
	private String destination;
	
	//How many hours flight is in the air
	@Column
	private long flightTime;
	
	//How many hours after the start of the day until the flight takes off
	@Column
	private long off;

	@ManyToMany(mappedBy = "bookedFlights")
	@Column
	private Set<Users> passengers = new HashSet<>();
	
	public Set<Users> getPassengers() {
		return passengers;
	}
	public void setPassengers(Set<Users> passengers) {
		this.passengers = passengers;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public long getFlightTime() {
		return flightTime;
	}
	public void setFlightTime(long flightTime) {
		this.flightTime = flightTime;
	}
	public long getOffset() {
		return off;
	}
	public void setOffset(long off) {
		this.off = off;
	}
	public Flight(String origin, String destination, long flightTime, long off) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.flightTime = flightTime;
		this.off = off;
	}
	
	public Flight() {
		
	}

}
