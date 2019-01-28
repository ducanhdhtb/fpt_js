import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-My Todos';
  todos = [
    {
      label: 'Bring Milk 1',
      done: false,
      priority:1
    },
    {
      label: 'Bring Milk 2',
      done: true,
      priority:2
    },
    {
      label: 'Bring Milk 3',
      done: false,
      priority:3
    },
    {
      label: 'Bring Milk 4',
      done: false,
      priority:4
    },
  ];

  addTodo(value){
    var newTodo = {
      label: value,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo){
    this.todos = this.todos.filter((t => t.label !== todo.label))
  }
}
