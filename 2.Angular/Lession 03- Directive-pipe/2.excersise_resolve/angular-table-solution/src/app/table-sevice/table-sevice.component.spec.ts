import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSeviceComponent } from './table-sevice.component';

describe('TableSeviceComponent', () => {
  let component: TableSeviceComponent;
  let fixture: ComponentFixture<TableSeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
