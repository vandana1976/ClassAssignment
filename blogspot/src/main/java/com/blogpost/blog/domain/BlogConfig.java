package com.blogpost.blog.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;

@Configuration
public class BlogConfig {
    @Bean
    public ArrayList<BlogPost> posts(){
        return new ArrayList<BlogPost>();
    }
}
