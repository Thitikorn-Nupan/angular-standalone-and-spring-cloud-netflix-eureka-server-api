package com.ttknpdev.netflixeurekaclientforagstandalone.annotation;

import org.springframework.core.annotation.AliasFor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@CrossOrigin // allow cross origin
@RestController
@RequestMapping
public @interface CommonRestAPI {
    // attribute ="" maps Alias of annotation =""
    @AliasFor(attribute = "path",annotation = RequestMapping.class) // have to specify alias for annotation because value more than one annotation
    String path() default "";
    @AliasFor(attribute = "origins",annotation = CrossOrigin.class) // have to specify alias for annotation because value more than one annotation
    String origins() default "";
}
