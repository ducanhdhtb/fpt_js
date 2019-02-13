import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   contacts = [
    { id: 1, name: 'Anh', phoneNumber: '123456789' },
    { id: 2, name: 'Ngan', phoneNumber: '987654321' },
    { id: 3, name: 'Linh', phoneNumber: '000000000' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
