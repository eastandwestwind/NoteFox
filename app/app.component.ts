import { Component } from '@angular/core';
import { Note } from './note';
import { FaDirective } from 'angular2-fontawesome/directives';

const NOTES: Note[] = [];

@Component({
    selector: 'my-notes',
    template: `
    <div class="navbar">
    <h1>{{title}}</h1>
    <button (click)="NewNote()">New +</button>
    <!--icon test-->
    <i fa [name]="rocket" [border]=true></i>
    </div>
    
    <div class="notesList">
    <ul class="notes">
      <li *ngFor="let note of notes" [class.selected]="note === selectedNote" (click)="onSelect(note)">
        <span class="badge"><i fa class="{{note.icon}}"></i></span> 
        <span>{{note.name}}</span>
      </li>
    </ul>
    </div>
    <my-note-detail [note]="selectedNote"></my-note-detail>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .notesList{
      position: relative;
      float: left;
    }
    
    .notes {
      margin: 2em 3em 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
      // position: relative;
      // float: left;
    }
    .notes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .notes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .notes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .notes .text {
      position: relative;
      top: -3px;
    }
    .notes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #839698;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  styleUrls: ['node_modules/font-awesome/css/font-awesome.css']
})

export class AppComponent {
  title = 'NoteFox';
  selectedNote: Note;
  notes = NOTES;
  onSelect(note: Note): void {
    this.selectedNote = note;
  }
  NewNote() {
    NOTES.push({ id: 20, icon: 'pencil-square-o', name: 'My Note' , text:' ' });
    this.selectedNote = NOTES[NOTES.length-1];
  }
}


