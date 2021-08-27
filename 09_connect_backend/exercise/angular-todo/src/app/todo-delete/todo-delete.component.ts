import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  todo: Todo;
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    /*this.productService.findById(id).subscribe(value => {this.product = value});*/
    this.todoService.deleteTodo(id).subscribe(()=> {
      alert('Delete Success');
    });
    this.router.navigateByUrl('');
  }
  ngOnInit(): void {
  }

}
