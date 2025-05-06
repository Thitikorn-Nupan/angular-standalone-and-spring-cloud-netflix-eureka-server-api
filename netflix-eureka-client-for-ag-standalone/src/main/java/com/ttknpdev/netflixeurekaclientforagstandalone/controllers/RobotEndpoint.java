package com.ttknpdev.netflixeurekaclientforagstandalone.controllers;

import com.ttknpdev.netflixeurekaclientforagstandalone.annotation.CommonRestAPI;
import com.ttknpdev.netflixeurekaclientforagstandalone.entities.Robot;
import com.ttknpdev.netflixeurekaclientforagstandalone.services.RobotResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
@CrossOrigin("http://localhost:4200") // allow cross origin
@RestController
@RequestMapping(value = RobotEndpoint.BASE_PREFIX_PATH)
*/
@CommonRestAPI(path = RobotEndpoint.BASE_PREFIX_PATH,origins = "http://localhost:4200")
public class RobotEndpoint {
    // follow prefix
    protected static final String BASE_PREFIX_PATH = "/api/robot";
    // Domain follow the name project on eureka server
    private static final String ADDRESS = "http://ROBOTS-MICROSERVICE"; // work as http://ROBOTS-MICROSERVICE/<your prefix path>
    private final RobotResponseService robotResponseService;

    @Autowired
    public RobotEndpoint(RobotResponseService robotResponseService) {
        this.robotResponseService = robotResponseService;
    }

    @GetMapping(value = "/reads")
    private ResponseEntity<List<Robot>> retrieveRobotsFromRobotsMicroservice(){
        String address = ADDRESS + BASE_PREFIX_PATH+"/reads";
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(robotResponseService.reads(address));
    }

    @GetMapping(value = "/read")
    private ResponseEntity<Robot> retrieveRobotFromRobotMicroservice(@RequestParam(required = false) Long id){
        String address = ADDRESS + BASE_PREFIX_PATH+"/read?id="+id;
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(robotResponseService.read(address));
    }


}
