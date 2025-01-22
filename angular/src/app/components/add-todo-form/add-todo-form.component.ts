import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-add-todo-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.scss'
})
export class AddTodoFormComponent {

  todoForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({ // on definit un formgorup
      title: ['', [Validators.required, Validators.minLength(3)]],
      isDone: [false]
    });
  } // on definit les attributs de l objet aui sera construit dans le formGroup

  addTodo() {
    if (this.todoForm.valid){
      this.isLoading = true;
      const newTodo : Todo = this.todoForm.value; // on construit le nv todo depuis le todoForm  

      this.todoService.addTodo([newTodo]).subscribe({
        next: () =>{
          this.todoForm.reset({ isDone: false }); // on reset le form avec propostion d etat inital d un des attributs
          this.isLoading = false;
          alert('TODO added successfully!');
        },
        error: () => {
          this.isLoading = false;
          alert('Failed to add TODO.');
        }
      })
    }
  }
}
