package com.example.demo.src.main.java.com.example.todo.service;

import com.example.demo.src.main.java.com.example.todo.model.Todo;
import com.example.demo.src.main.java.com.example.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    @Override
    public Todo findById(int id) {
        return todoRepository.findById(id).get();
    }

    @Override
    public List<Todo> saveAll(List<Todo> todos) {
        return  todoRepository.saveAll(todos);
    }

    @Override
    public void deleteById(int id) {
         todoRepository.deleteById(id);
    }
}
