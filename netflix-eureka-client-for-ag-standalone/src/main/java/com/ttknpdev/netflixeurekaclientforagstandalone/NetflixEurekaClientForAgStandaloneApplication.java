package com.ttknpdev.netflixeurekaclientforagstandalone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication // ** my ag project will access any service by this eureka
@EnableDiscoveryClient
// *** The @EnableEurekaClient annotation is used to make your Spring Boot application acts as a Eureka Client.
public class NetflixEurekaClientForAgStandaloneApplication {

    public static void main(String[] args) {
        SpringApplication.run(NetflixEurekaClientForAgStandaloneApplication.class, args);
    }

}
