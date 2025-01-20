package com.example.demo.src.main.java.com.example.todo.controller;

import com.example.demo.src.main.java.com.example.todo.model.Todo;
import com.example.demo.src.main.java.com.example.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<Todo> findAll() {
        return todoService.findAll();
    }

    @GetMapping("/{id}")
    public Todo findById(@PathVariable int id) {
        return todoService.findById(id);
    }

    @PostMapping
    public List<Todo> save(@RequestBody List<Todo> todos) {
        return todoService.saveAll(todos);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id) {
        todoService.deleteById(id);
    }
}
