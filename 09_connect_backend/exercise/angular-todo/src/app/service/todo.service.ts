import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_URL = "http://localhost:3000/todoList";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  save(todo) {
    return this.httpClient.post<Todo>(this.API_URL, todo);
  }

  findById(id: number): Observable<Todo>{
    return this.httpClient.get<Todo>(this.API_URL + '/' + id);
  }

  editTodo(id: number, todo: Todo) {
    return this.httpClient.patch<Todo>(this.API_URL + '/' + id, todo);
  }

  deleteTodo(id: number) {
    return this.httpClient.delete<Todo>(this.API_URL+ '/' + id);
  }
}
