package com.ttknpdev.netflixeurekaclientforagstandalone.services;

import com.ttknpdev.netflixeurekaclientforagstandalone.entities.Customer;
import com.ttknpdev.netflixeurekaclientforagstandalone.entities.Robot;
import com.ttknpdev.netflixeurekaclientforagstandalone.logging.LogBack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class CustomerResponseService {

    private RestTemplate restTemplate;
    private LogBack logBack;
    private HttpHeaders headers;
    private HttpEntity entity;

    @Autowired
    public CustomerResponseService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        logBack = new LogBack(CustomerResponseService.class);
        // for send json on http body
        headers = new HttpHeaders();
    }

    public List<Customer> reads(String url) {
        logBack.log.debug("************ COLLECTION LIST ************** you called by api {} it's for ResTemplate only", url);
        Customer[] objects = restTemplate.getForObject(url, Customer[].class);
        // way to convert array object to list
        List<Customer> customers = null;
        if (objects != null) {
            customers = Arrays.asList(objects);
        }
        logBack.log.debug("customers stores {}",customers);
        return customers;
    }

    public Customer read(String url) {
        logBack.log.debug("************ COLLECTION LIST ************** you called by api {} it's for ResTemplate only", url);
        // it mapped getter/setter
        return restTemplate.getForObject(url ,Customer.class);
    }
}
