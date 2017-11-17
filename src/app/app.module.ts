import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FetchListService } from './fetch-list.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ FetchListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
