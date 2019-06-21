package com.blogpost.blog.controller;

import com.blogpost.blog.domain.BlogPost;
import com.blogpost.blog.domain.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class MainController {

    private Repository  repository;
    private List<BlogPost> posts;

    public MainController(List<BlogPost> posts, Repository repository) {
        this.repository = repository;
        this.posts = posts;
    }


    @GetMapping("/")
    public String index( Model model){
        model.addAttribute( "posts", posts);
        return "index" ;
    }

    @GetMapping(value = "/blog_posts/new")
    public String newBlog(BlogPost blogPost){
        return "new";
    }

    @PostMapping(value = "blog_posts/new")
    public   String addNewBlogPost(BlogPost blogPost, Model model) {
        repository.save(blogPost);
        posts.add(blogPost);
        model.addAttribute("title", blogPost.getTitle());
        model.addAttribute("author", blogPost.getAuthor());
        model.addAttribute("blogEntry", blogPost.getBlogEntry());

        return "result";
    }

    private void mirrorDB(){

        Iterable<BlogPost> blogList = repository.findAll();
        posts.clear();
        for (BlogPost blog : blogList){
            posts.add(blog);
        }
    }

    @DeleteMapping("/blog_posts/{id}/delete")
    public String deleteBlogPost(@PathVariable("id") Long id){
        repository.deleteById(id);
        mirrorDB();
        return "result";
    }
    @PutMapping("/blog_posts/{id}/edit")
    public  String editBlogEntryPut(BlogPost bp, Model model){
        repository.save(bp);
        mirrorDB();
        model.addAttribute("title", bp.getTitle());
        model.addAttribute("author", bp.getAuthor());
        model.addAttribute("blogEntry", bp.getBlogEntry());
        return "result";
    }
    @GetMapping("blog_posts/{id}/edit")
    public String editBlogEntryView(@PathVariable("id") Long id, Model model){
        Optional<BlogPost> optionalBlogPost = repository.findById(id);
        model.addAttribute("blogPost", optionalBlogPost.get());
        return "edit";
    }

}
