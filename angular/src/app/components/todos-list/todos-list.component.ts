import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { HighlightDoneTodoDirective } from '../../directives/highlight-done-todo.directive';

@Component({
  selector: 'app-todos-list',
  imports: [CommonModule, HighlightDoneTodoDirective],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent implements OnInit{

  todosService = inject(TodoService);
  todos = signal<Array<Todo>>([]);

  ngOnInit(): void {
     this.todosService
      .getTodos()
      .subscribe((todos)=>{
        this.todos.set(todos);
      })
  }

}
