import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { StickyNote } from '../../../models/StickyNote';
import { ENDPOINTS } from '../../../helpers/constants';
import { handleError } from '../../../helpers/utils';
import { ToDoList } from '../../../models/ToDoList';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  addListItem(listItem: any): Observable<any> {
    return new Observable<any>();
  }

  editListItem(listItem: any, oldListItem: any): Observable<any> {
    return new Observable<any>();
  }

  //#region STICKY NOTES

  getStickyNotes(): Observable<StickyNote[]> {
    return this.httpClient
      .get<StickyNote[]>(ENDPOINTS.STICKY_NOTE)
      .pipe(catchError(handleError<StickyNote[]>()));
  }

  addStickyNote(stickyNote: StickyNote): Observable<StickyNote> {
    return this.httpClient
      .post<StickyNote>(ENDPOINTS.STICKY_NOTE, stickyNote)
      .pipe(catchError(handleError<StickyNote>()));
  }

  deleteStickyNote(stickyNote: StickyNote): Observable<StickyNote> {
    return this.httpClient
      .delete<StickyNote>(ENDPOINTS.STICKY_NOTE + `/${stickyNote._id}`, {
        body: stickyNote
      })
      .pipe(catchError(handleError<StickyNote>()));
  }

  editStickyNote(stickyNote: StickyNote): Observable<StickyNote> {
    return this.httpClient
      .put<StickyNote>(ENDPOINTS.STICKY_NOTE + `/${stickyNote._id}`, stickyNote)
      .pipe(catchError(handleError<StickyNote>()));
  }

  //#endregion

  //#region LISTS

  getLists(): Observable<ToDoList[]> {
    return this.httpClient
      .get<ToDoList[]>(ENDPOINTS.TO_DO_LIST)
      .pipe(catchError(handleError<ToDoList[]>()));
  }

  addList(stickyNote: ToDoList): Observable<ToDoList> {
    return this.httpClient
      .post<ToDoList>(ENDPOINTS.TO_DO_LIST, stickyNote)
      .pipe(catchError(handleError<ToDoList>()));
  }

  deleteList(stickyNote: ToDoList): Observable<ToDoList> {
    return this.httpClient
      .delete<ToDoList>(ENDPOINTS.TO_DO_LIST + `/${stickyNote._id}`, {
        body: stickyNote
      })
      .pipe(catchError(handleError<ToDoList>()));
  }

  editList(stickyNote: ToDoList): Observable<ToDoList> {
    return this.httpClient
      .put<ToDoList>(ENDPOINTS.TO_DO_LIST + `/${stickyNote._id}`, stickyNote)
      .pipe(catchError(handleError<ToDoList>()));
  }

  //#endregion
}
