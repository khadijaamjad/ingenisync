import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api-service/api-service.service';
import { isSuccessResponse, getSuccessAlert } from '../../helpers/utils';
import { ToDoItem } from '../../models/ToDoItem';
import { ToDoList } from '../../models/ToDoList';

@Component({
  selector: 'app-list-item-modal',
  templateUrl: './list-item-modal.component.html',
  styleUrl: './list-item-modal.component.scss'
})
export class ListItemModalComponent implements OnInit {
  loading = false;
  isActive = true;
  isAddMode = true;
  submitted = false;
  selectedList: ToDoList;
  description: string;
  todoListForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<ListItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: ToDoList
  ) {
    this.selectedList = data;
    this.isAddMode = !this.selectedList;
    this.description = this.isAddMode ? 'Add List' : 'Update List';

    this.todoListForm = this.fb.group({
      listTitle: ['', Validators.required],
      toDoItems: this.fb.array([])
    });
  }

  ngOnInit() {
    if (!this.isAddMode) {
      this.todoListForm.patchValue({
        listTitle: this.selectedList.title
      });

      const itemsFormArray = this.toDoItems();

      this.selectedList.toDoItems.forEach((item) => {
        itemsFormArray.push(this.existingItem(item));
      });
    }
  }

  // Getter for the items form array
  toDoItems(): FormArray {
    return this.todoListForm.get('toDoItems') as FormArray;
  }

  newItem(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      dueDate: ['']
    });
  }

  existingItem(item: ToDoItem): FormGroup {
    return this.fb.group({
      _id: [item._id],
      description: [item.description, Validators.required],
      dueDate: [item.dueDate]
    });
  }

  // Function to add a new item to the form array
  addItem() {
    const lastItem = this.toDoItems().at(this.toDoItems.length - 1);
    const lastDescription = lastItem ? lastItem.get('description')?.value : '';

    // Only add a new item if the description of the last item is provided
    if (lastDescription.trim() !== '') {
      this.toDoItems().push(this.newItem());
    }
  }

  // Function to remove an item from the form array
  removeItem(index: number) {
    this.toDoItems().removeAt(index);
  }

  onSubmit() {
    this.submitted = true;

    if (this.todoListForm?.invalid) {
      return;
    }

    this.loading = true;

    if (
      this.isAddMode ||
      this.toDoItems().controls.length > this.selectedList.toDoItems.length
    ) {
      this.addListItem();
    } else if (
      this.toDoItems().controls.length < this.selectedList.toDoItems.length
    ) {
      this.deleteListItems();
    } else {
      this.updateListItem();
    }
  }

  private addListItem() {
    const req = this.todoListForm?.value;

    this.apiService
      .addListItem(req, this.selectedList._id)
      .subscribe((data) => {
        if (isSuccessResponse(data)) this.saveAndClose();
      })
      .add(() => (this.loading = false));
  }

  private updateListItem() {
    const req = this.todoListForm?.value;

    this.apiService
      .editListItem(req, this.selectedList._id)
      .subscribe((data) => {
        if (isSuccessResponse(data)) this.saveAndClose();
      })
      .add(() => (this.loading = false));
  }

  private deleteListItems() {
    const req = this.todoListForm?.value;

    this.apiService
      .deleteListItem(req, this.selectedList._id)
      .subscribe((data) => {
        if (isSuccessResponse(data)) this.saveAndClose();
      })
      .add(() => (this.loading = false));
  }

  close() {
    this.dialogRef.close();
  }

  saveAndClose() {
    getSuccessAlert(
      `List item ${this.isAddMode ? 'added' : 'updated'} successfully!`
    );
    this.dialogRef.close(true);
  }
}
