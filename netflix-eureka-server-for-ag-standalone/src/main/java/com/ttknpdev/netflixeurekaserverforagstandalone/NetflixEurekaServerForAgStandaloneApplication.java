package com.ttknpdev.netflixeurekaserverforagstandalone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
// if you don't specify you can not run this server
@EnableEurekaServer // ** Mark this project is Eureka server (eureka server ทำหน้าที่เป็น service discovery/service registry)
// ** Note you can not access eureka client by url on your browser Ex http://ROBOTS-MICROSERVICE/...
// ** You have to call by RestTemplate after you declare bean @LoadBalance
public class NetflixEurekaServerForAgStandaloneApplication {

    public static void main(String[] args) {
        SpringApplication.run(NetflixEurekaServerForAgStandaloneApplication.class, args);
    }

}
