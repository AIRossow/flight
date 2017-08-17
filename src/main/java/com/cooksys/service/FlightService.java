package com.cooksys.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.FlightsRepository;

@Service
public class FlightService {

	@Autowired
	FlightGenerator generator;
	
	@Autowired
	FlightsRepository fRep;

	private ArrayList<Flight> flightList = new ArrayList<>();
	
	private ArrayList<Flight> route = new ArrayList<>();
	
	public ArrayList<Flight> getDailyFlightList()
	{
		return flightList;
	}
	
//	public ArrayList<Flight>createRoute(Flight flight) {
//		route.add(flight);
//		return route;
//	}
	
	//The fixedDelay parameter determines how often a new day is generated as expressed in milliseconds
	@Scheduled(fixedDelay=5000000)
	private void refreshFlights()
	{
		flightList = generator.generateNewFlightList();
		fRep.save(flightList);
	}
	
}
