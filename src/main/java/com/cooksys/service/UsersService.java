package com.cooksys.service;

import java.util.ArrayList;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.FlightsRepository;
import com.cooksys.repository.UsersRepository;
import com.cooksys.entity.Users;

@Service
public class UsersService {

	@Autowired
	private UsersRepository uRep;
	
	@Autowired
	private FlightsRepository fRep;
	
//	public UsersService(UsersRepository uRep){
//		this.uRep = uRep;
//	}
	
	public boolean login(String username, String password)
	{
		Users user = uRep.findByUsername(username);
		
		if(user == null || user.getPassword() != password)
			return false;
		
		return true;
	}
	
	public boolean register(String username, String password)
	{
		Users user = new Users();
		user.setUsername(username);
		user.setPassword(password);
		uRep.save(user);
		return true;
	}

	public boolean book(String username, String password, Long flightId) {
		Users user = uRep.findByUsernameAndPassword(username, password);
		if(user == null)
			return false;
		Flight flight = fRep.getOne(flightId);
		user.addFlight(flight);
		uRep.save(user);
		return true;
	}

	public Set<Flight> booked(String username, String password) {
		Users user = uRep.findByUsernameAndPassword(username, password);
		if(user == null)
			return null;
		Set<Flight> flights = user.getFlights();
		for(Flight i : flights) {
			Set<Users> passengers = i.getPassengers();
			passengers.remove(user);
			i.setPassengers(null);
		}
		return flights;
	}
}
