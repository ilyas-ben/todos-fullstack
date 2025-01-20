import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos = () => {
    const url = `http://localhost:8080/todos`
    return this.http.get<Array<Todo>>(url);
  }
}
