import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

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
    //Toggle in the UI
    todo.completed = !todo.completed;
    //Toggle in the database
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log('todo'));
  }

  onDelete(todo) {

  }


}
