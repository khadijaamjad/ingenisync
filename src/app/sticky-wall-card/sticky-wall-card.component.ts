import { Component, Input } from '@angular/core';
import { StickyNote } from '../../models/StickyNote';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sticky-wall-card',
  templateUrl: './sticky-wall-card.component.html',
  styleUrl: './sticky-wall-card.component.scss'
})
export class StickyWallCardComponent {
  @Input() note!: StickyNote;
  @Input() noteDeletionFunction!: (stickyNote: StickyNote) => void;
  @Input() noteUpdatingFunction!: (stickyNote: StickyNote) => void;

  constructor(private dialog: MatDialog) {}
}
