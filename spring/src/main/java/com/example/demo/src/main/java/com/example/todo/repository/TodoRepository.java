package com.example.demo.src.main.java.com.example.todo.repository;

import com.example.demo.src.main.java.com.example.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
}