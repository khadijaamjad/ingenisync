import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from '../../models/ToDoList';
import { ToDoItem } from '../../models/ToDoItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  toDoList: ToDoList | undefined;

  constructor(private router: Router) {
    const state = this.router?.getCurrentNavigation()?.extras.state;

    if (state) {
      this.toDoList = <ToDoList>state;
    }
  }

  ngOnInit() {}
}
