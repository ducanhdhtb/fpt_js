import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
 
@Component({
  selector: 'app-table-sevice',
  templateUrl: './table-sevice.component.html',
  styleUrls: ['./table-sevice.component.css']
})
export class TableSeviceComponent implements OnInit {
  datas = [];
  fill: any;

  constructor(private tableSevice: TableService) { }

  ngOnInit() {
    this.datas = this.tableSevice.getData();
  }

}
