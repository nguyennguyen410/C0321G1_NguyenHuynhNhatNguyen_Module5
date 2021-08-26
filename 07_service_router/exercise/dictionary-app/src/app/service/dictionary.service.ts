import { Injectable } from '@angular/core';
import {Dictionary} from "../dictionary";


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionarys: Dictionary[] = [
    {id: 1, name: 'book', mean: 'quyển sách'},
    {id: 2, name: 'pen', mean: 'bút máy'},
    {id: 3, name: 'pencil', mean: 'bút chì'},
    {id: 4, name: 'ruler', mean: 'thước kẻ'}
    ]

  constructor() { }

  getAll() {
    return this.dictionarys;
  }

  // @ts-ignore
  findById(id:number): Dictionary{
    return this.dictionarys.find(dicObj => dicObj.id === id)
  }

}
