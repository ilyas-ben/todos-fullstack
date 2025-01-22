import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = 'http://localhost:8080/todos';

  constructor(private http: HttpClient) { }

  addTodo(todos: Todo[]): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.url, todos);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Array<Todo>>(this.url);
  }
}
