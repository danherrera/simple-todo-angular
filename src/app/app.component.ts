import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TodoDataService } from './todo/todo-data.service';
import { TodoItem } from './todo/todo-item.model';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-todo';

  items: TodoItem[] = []

  constructor(
    private todoDataService: TodoDataService,
  ) {
    todoDataService.todoItems$
      .pipe(untilDestroyed(this))
      .subscribe(i => this.items = i)
  }

  onClickItem(item: TodoItem) {
    this.todoDataService.toggleItem(item)
  }
}
