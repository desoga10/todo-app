import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  //Setting Classes

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }


  onToggle(todo) {
    console.log('toggled');
  }

  onDelete(todo) {
    console.log('deleted');
  }


}
