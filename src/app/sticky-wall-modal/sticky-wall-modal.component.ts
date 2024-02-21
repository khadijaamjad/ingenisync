import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StickyNote } from '../../models/StickyNote';
import { TEXT_FIELDS_MAX_LENGTH } from '../../helpers/constants';
import { isSuccessResponse, getSuccessAlert } from '../../helpers/utils';
import { ApiService } from '../services/api-service/api-service.service';

@Component({
  selector: 'app-sticky-wall-modal',
  templateUrl: './sticky-wall-modal.component.html',
  styleUrl: './sticky-wall-modal.component.scss'
})
export class StickyWallModalComponent {
  loading = false;
  isAddMode = true;
  submitted = false;
  selectedNote: StickyNote;
  description: string;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<StickyWallModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: StickyNote
  ) {
    this.selectedNote = data;
    this.isAddMode = !this.selectedNote?._id;
    this.description = this.isAddMode ? 'Add Note' : 'Update Note';

    this.formGroup = this.fb.group({
      title: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(TEXT_FIELDS_MAX_LENGTH),
          Validators.pattern(/^[A-Za-z\s.]+$/)
        ])
      ]
    });
  }

  ngOnInit(): void {
    if (!this.isAddMode) {
      this.formGroup.patchValue({ title: this.selectedNote.title });
      this.formGroup.patchValue({ noteText: this.selectedNote.noteText });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    this.loading = true;

    this.isAddMode ? this.addNote() : this.updateNote();
  }

  private addNote() {
    this.apiService
      .addStickyNote(this.formGroup.value)
      .subscribe((data) => {
        if (isSuccessResponse(data)) this.save(this.isAddMode);
      })
      .add(() => (this.loading = false));
  }

  private updateNote() {
    let updatedJob: StickyNote = {
      _id: this.selectedNote?._id,
      title: this.formGroup.value?.title,
      noteText: this.formGroup.value?.noteText
    };

    this.apiService
      .editStickyNote(updatedJob)
      .subscribe((data) => {
        if (isSuccessResponse(data)) this.save(this.isAddMode);
      })
      .add(() => (this.loading = false));
  }

  close() {
    this.dialogRef.close();
  }

  save(isAddMode: boolean) {
    getSuccessAlert(`Note ${isAddMode ? 'added' : 'updated'} successfully!`);
    this.dialogRef.close(true);
  }

  get title() {
    return this.formGroup.controls['title'];
  }
  get noteText() {
    return this.formGroup.controls['noteText'];
  }
}
