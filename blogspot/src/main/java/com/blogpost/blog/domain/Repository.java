package com.blogpost.blog.domain;

import org.springframework.data.repository.CrudRepository;

public interface Repository extends CrudRepository<BlogPost, Long > {

}
