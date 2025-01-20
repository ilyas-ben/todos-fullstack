import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './services/todo.service';
import { HeaderComponent } from "./components/header/header.component";
import { TodosListComponent } from './components/todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent   {
  
  title = 'todos';


}
