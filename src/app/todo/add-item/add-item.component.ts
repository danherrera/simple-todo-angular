import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addItemForm: FormGroup = this.fb.group({
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private todoDataService: TodoDataService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const description = this.addItemForm.value.description;
    this.todoDataService.additem({
      description: description,
      isDone: false,
    })
    this.addItemForm.value.description = ''
  }

}
