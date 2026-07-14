package com.ttknpdev.microservice.controller;

import com.ttknpdev.microservice.entity.Customer;
import com.ttknpdev.microservice.logging.LogBack;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ttknpdev.microservice.repository.ServiceRepository;
import com.ttknpdev.microservice.service.CustomersService;
import java.util.List;

@RestController
@RequestMapping(value = "/api/customer")
public class CustomersRoteControl {

    private final ServiceRepository<Customer> customerRepository;

    CustomersRoteControl() {
        customerRepository = new CustomersService();
        LogBack.setLog(CustomersRoteControl.class);
    }

    @GetMapping({"/","/test","/t"})
    private ResponseEntity<String> test() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("hello world");
    }

    @GetMapping(value = "/reads")
    private ResponseEntity<List<Customer>> reads() {
        LogBack.log.info("you requested 8081/api/customer/reads");
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(customerRepository.findAll());
    }

    @GetMapping(value = "/read")
    private ResponseEntity<Customer> read(@RequestParam Long pk) {
        LogBack.log.info("you requested 8081/api/customer/read?pk={}",pk);
        return ResponseEntity
                .status(HttpStatusCode.valueOf(202))
                .body(customerRepository.findById(pk));
    }

    @PostMapping(value = "/create")
    private ResponseEntity<Boolean> create(@RequestBody Customer customer) {
        LogBack.log.info("you requested 8082/api/customer/create and pass json body {}",customer);
        return ResponseEntity
                .status(HttpStatusCode.valueOf(201))
                .body(customerRepository.save(customer));
    }

    @PutMapping(value = "/update")
    private ResponseEntity<Boolean> update(@RequestBody Customer customer,@RequestParam Long pk) {
        LogBack.log.info("you requested 8082/api/customer/update?pk={} and pass json body {}",pk,customer);
        return ResponseEntity
                .status(HttpStatusCode.valueOf(202))
                .body(customerRepository.edit(customer,pk));
    }

    @DeleteMapping(value = "/delete")
    private ResponseEntity<Boolean> delete(@RequestParam Long pk) {
        LogBack.log.info("you requested 8082/api/customer/delete?pk={}",pk);
        return ResponseEntity
                .status(HttpStatusCode.valueOf(202))
                .body(customerRepository.remove(pk));
    }
}
