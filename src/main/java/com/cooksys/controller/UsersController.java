package com.cooksys.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.pojo.Flight;
import com.cooksys.service.UsersService;


@RestController
@RequestMapping("users")
@CrossOrigin
public class UsersController {
	
	@Autowired
	private UsersService uService;
	
	@RequestMapping("/login")
	public boolean login(@RequestParam(required = true) String username, @RequestParam(required = true) String password, HttpServletResponse response)
	{
		return uService.login(username, password);
	}
	
	@RequestMapping("/register")
	public boolean register(@RequestParam(required = true) String username, @RequestParam(required = true) String password, HttpServletResponse response)
	{
		return uService.register(username, password);
	}
	
	@RequestMapping("/bookFlight")
	public boolean book(@RequestParam(required = true) String username, @RequestParam(required = true) String password,
						@RequestParam(required = true) Long flightId, HttpServletResponse response)
	{
		System.out.println(username+" "+ password);
		System.out.println(flightId);
		return uService.book(username, password, flightId);
	}

}