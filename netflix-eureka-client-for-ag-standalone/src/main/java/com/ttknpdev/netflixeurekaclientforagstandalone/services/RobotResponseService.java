package com.ttknpdev.netflixeurekaclientforagstandalone.services;


import com.ttknpdev.netflixeurekaclientforagstandalone.entities.Robot;
import com.ttknpdev.netflixeurekaclientforagstandalone.logging.LogBack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class RobotResponseService {

    private RestTemplate restTemplate;
    private LogBack logBack;
    private HttpHeaders headers;
    private HttpEntity entity;

    @Autowired
    public RobotResponseService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        logBack = new LogBack(RobotResponseService.class);
        // for send json on http body
        headers = new HttpHeaders();
    }
    public List<Robot> reads(String url) {
        logBack.log.debug("************ H2 DATABASE ************** you called by api {} it's for ResTemplate only", url);
        Robot[] objects = restTemplate.getForObject(url, Robot[].class);
        // way to convert array object to list
        List<Robot> robots = null;
        if (objects != null) {
            robots = Arrays.asList(objects);
        }
        logBack.log.debug("robots stores {}",robots);
        return robots;
    }

    public Robot read(String url) {
        logBack.log.debug("************ H2 DATABASE ************** you called by api {} it's for ResTemplate only", url);
        // it mapped getter/setter
        return restTemplate.getForObject(url ,Robot.class);
    }

    public Robot create(String url, Robot robot) {
        logBack.log.debug("************ H2 DATABASE ************** you called by api {} it's for ResTemplate only", url);
        // *** way to pass json body on request
        headers.setContentType(MediaType.APPLICATION_JSON);
        // just returning that responses your endpoint!
        // way to send post http
        Robot response = restTemplate.postForObject(url ,robot, Robot.class);
        logBack.log.debug("response has {}",response);
        return response;
    }

    public Robot update(String url, Robot robot) {
        logBack.log.debug("************ H2 DATABASE ************** you called by api {} it's for ResTemplate only", url);
        headers.setContentType(MediaType.APPLICATION_JSON);
        // *** Just Another ways to play api
        // *** restTemplate.put(url ,robot); Still work good But it's void method
        // *** if you need response , Use this way
        entity = new HttpEntity<Robot>(robot);
        ResponseEntity<Robot> response = restTemplate.exchange(url, HttpMethod.PUT, entity, Robot.class);
        //  // ** no need cause its type is void
        logBack.log.debug("response has {}",response);
        return response.getBody();
    }

    public Boolean delete(String url) {
        logBack.log.debug("************ H2 DATABASE ************** you called by api {} it's for ResTemplate only", url);
        // default it set content-type is application/json => Content-Type:"application/json"
        ResponseEntity<Boolean> response = restTemplate.exchange(url, HttpMethod.DELETE, null, Boolean.class);
        logBack.log.info("response has {}",response);
        return response.getBody();
    }
}
