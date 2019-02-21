import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableSeviceComponent } from './table-sevice/table-sevice.component';
import { TableService } from './table.service';
import { PipePhone } from './pipe-phone';
import { PipeFill } from './pipe-fill';

@NgModule({
  declarations: [
    AppComponent,
    TableSeviceComponent,
    PipePhone,
    PipeFill
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
