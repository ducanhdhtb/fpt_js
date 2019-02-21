import { Component } from '@angular/core';
import { TableService, User } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTable';

  selected = '-1';

  selections = ['id', 'firstName', 'lastName', 'email', 'birthday', 'salary'];

  data: User[];

  constructor(data: TableService) {
    this.data = data.getData();
  }
}
