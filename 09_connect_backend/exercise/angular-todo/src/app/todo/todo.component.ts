import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from "../service/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.todoService.getAll().subscribe(value => {this.todos = value});
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
  idSave: any;
  change() {
    const value = this.content.value;
    this.idSave = this.todoService.getAll().subscribe(value => {this.todos = value});
    if (value) {
      const todo: Todo = {
        id: this.idSave++,
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() => {
        this.content.reset();
        alert('Create Done!!');
        this.router.navigateByUrl('todoList');
      })

    }
  }


}
