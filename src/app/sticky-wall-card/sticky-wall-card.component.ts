import { Component, Input } from '@angular/core';
import { StickyNote } from '../../models/StickyNote';

@Component({
  selector: 'app-sticky-wall-card',
  templateUrl: './sticky-wall-card.component.html',
  styleUrl: './sticky-wall-card.component.scss'
})
export class StickyWallCardComponent {
  @Input() note!: StickyNote;
}
