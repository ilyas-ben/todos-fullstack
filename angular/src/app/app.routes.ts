import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async() => {
            const vDeRetour = await import('./components/todos-list/todos-list.component');
            return vDeRetour.TodosListComponent;
        }
    },
    {
        path: 'add',
        pathMatch: 'full',
        loadComponent: async() => {
            const vDeRetour = await import('./components/add-todo-form/add-todo-form.component');
            return vDeRetour.AddTodoFormComponent;
        }
    }
];
