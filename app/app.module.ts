import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { NoteContentComponent } from './note-content.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule
  ],
  declarations: [
    AppComponent,
    NoteContentComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
