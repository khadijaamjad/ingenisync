import { Component, OnInit } from '@angular/core'
import { StickyNote } from '../../models/StickyNote'
import { ApiService } from '../services/api-service/api-service.service'

@Component({
  selector: 'app-sticky-wall',
  templateUrl: './sticky-wall.component.html',
  styleUrl: './sticky-wall.component.scss'
})

export class StickyWallComponent implements OnInit {
  notes: StickyNote[] | undefined

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getStickyNotes()
  }

  getStickyNotes() {
    this.apiService.getStickyNotes().subscribe((apiResponse) => {
      const notes = apiResponse
      this.notes = notes?.length === 0 ? undefined : notes
    })
  }
}
