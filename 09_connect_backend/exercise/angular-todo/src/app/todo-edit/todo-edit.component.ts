import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo: Todo;
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(),
    content: new FormControl(),
    complete: new FormControl()
  });
  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    console.log(id);
    this.todoService.findById(id).subscribe(value => {
      this.todo = value;
      console.log(this.todo);
      this.todoForm.setValue(this.todo);});
  }

  submit() {
    const todo = this.todoForm.value;
    this.todoService.editTodo(todo.id, todo).subscribe(()=> {
      alert('Update success');
      this.router.navigateByUrl('');
    });
  }
}
