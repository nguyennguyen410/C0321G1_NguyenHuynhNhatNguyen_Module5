import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThProgessBarComponent } from './th-progess-bar/th-progess-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ThProgessBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
