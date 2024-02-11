import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service/api-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { isSuccessResponse, getSuccessAlert } from '../../helpers/utils';
import { ToDoItem } from '../../models/ToDoItem';

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
  selectedList: ToDoItem;
  description: string;
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<ListItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: ToDoItem
  ) {
    this.selectedList = data;
    this.isAddMode = !this.selectedList;
    this.description = this.isAddMode ? 'Add List Item' : 'Update List Item';
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this.formGroup.patchValue(this.selectedList);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formGroup?.invalid) {
      return;
    }

    this.loading = true;

    if (this.isAddMode) {
      this.addListItem();
    } else {
      this.updateListItem();
    }
  }

  private addListItem() {
    this.apiService
      .addListItem(this.formGroup?.value)
      .subscribe((data) => {
        if (isSuccessResponse(data)) this.saveAndClose();
      })
      .add(() => (this.loading = false));
  }

  private updateListItem() {
    const req = this.formGroup?.value;

    this.apiService
      .editListItem(req, this.selectedList._id)
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
