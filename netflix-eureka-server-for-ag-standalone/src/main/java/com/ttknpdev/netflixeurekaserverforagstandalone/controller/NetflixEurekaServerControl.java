package com.ttknpdev.netflixeurekaserverforagstandalone.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NetflixEurekaServerControl {
    @GetMapping(value = "/server")
    private ResponseEntity<String> testServer() {
        return ResponseEntity.ok("You are on port 8761");
    }
}
