import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private subject = new BehaviorSubject<TodoItem[]>([])
  todoItems$: Observable<TodoItem[]> = this.subject

  constructor() { }

  additem(item: TodoItem) {
    const list = this.subject.value
    list.push(item)
    this.subject.next(list)
  }

  toggleItem(item: TodoItem) {
    const list = this.subject.value
      .map(i => {
        if (i.description === item.description) {
          return {
            description: i.description,
            isDone: !i.isDone
          }
        } else {
          return i;
        }
      })
      this.subject.next(list)
  }
}
