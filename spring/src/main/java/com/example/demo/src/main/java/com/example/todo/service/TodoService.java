package com.example.demo.src.main.java.com.example.todo.service;

import com.example.demo.src.main.java.com.example.todo.model.Todo;

import java.util.List;

public interface TodoService   {

    public List<Todo> findAll();

    public Todo findById(int id);

    public List<Todo> saveAll(List<Todo> todos);

    public void deleteById(int id);
}
