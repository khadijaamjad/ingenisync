import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  addListItem(listItem: any): Observable<any> {
    return new Observable<any>;
  }

  editListItem(listItem: any, oldListItem: any): Observable<any> {
    return new Observable<any>;
  }
}
