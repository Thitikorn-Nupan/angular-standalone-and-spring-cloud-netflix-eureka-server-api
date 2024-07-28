package com.ttknpdev.netflixeurekaclientforagstandalone.controllers;

import com.ttknpdev.netflixeurekaclientforagstandalone.entities.Customer;
import com.ttknpdev.netflixeurekaclientforagstandalone.entities.Robot;
import com.ttknpdev.netflixeurekaclientforagstandalone.services.CustomerResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = CustomerEndpoint.BASE_PREFIX_PATH)
// it is a good way , i don't need to set cross on base endpoint i set on this endpoint
@CrossOrigin("http://localhost:4200") // allow cross origin
public class CustomerEndpoint {
    // follow prefix
    protected static final String BASE_PREFIX_PATH = "/api/customer";
    // domain follow the name project on eureka server
    protected static final String ADDRESS = "http://CUSTOMERS-MICROSERVICE"; // work as http://localhost:8081/<your prefix path>
    private CustomerResponseService customerResponseService;
    @Autowired
    public CustomerEndpoint(CustomerResponseService customerResponseService) {
        this.customerResponseService = customerResponseService;
    }

    @GetMapping(value = "/reads")
    private ResponseEntity<List<Customer>> retrieveCustomersFromCustomersMicroservice(){
        String address = ADDRESS + BASE_PREFIX_PATH+"/reads";
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(customerResponseService.reads(address));
    }

    @GetMapping(value = "/read")
    private ResponseEntity<Customer> retrieveCustomerMicroservice(@RequestParam(required = false) Long pk){
        String address = ADDRESS + BASE_PREFIX_PATH+"/read?pk="+pk;
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(customerResponseService.read(address));
    }
}
