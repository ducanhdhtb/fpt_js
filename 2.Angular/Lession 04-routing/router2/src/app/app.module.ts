import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

import { AppRoutingModule} from './app-routing.module';
import { SettingComponent } from './setting/setting.component';





@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
