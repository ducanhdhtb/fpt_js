import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  value: string;

  @Output()
  onSearch = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange() {
    this.onSearch.emit(this.value);
  }
}
