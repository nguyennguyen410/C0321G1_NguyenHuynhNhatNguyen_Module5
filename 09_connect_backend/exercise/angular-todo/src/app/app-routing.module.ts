import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {TodoEditComponent} from "./todo-edit/todo-edit.component";
import {TodoDeleteComponent} from "./todo-delete/todo-delete.component";


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'todoEdit/:id', component: TodoEditComponent},
  {path: 'todoDelete/:id', component: TodoDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
