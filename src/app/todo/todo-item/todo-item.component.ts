import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem = {
    description: '',
    isDone: false
  }

  @Output() onClick = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickItem() {
    this.onClick.emit(this.todoItem);
  }
}
