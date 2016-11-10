import { Component } from '@angular/core';
import { Note } from './note';


const NOTES: Note[] = [];

@Component({
    selector: 'my-notes',
    template: `
    <h1>{{title}}</h1>
    <button (click)="NewNote()">New Note +</button>
    <ul class="notes">
      <li *ngFor="let note of notes" [class.selected]="note === selectedNote" (click)="onSelect(note)">
        <span class="badge" ng-style="color">{{note.id}}</span> 
        <span>{{note.name}}</span>
      </li>
    </ul>
    <my-note-detail [note]="selectedNote"></my-note-detail>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .notes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .notes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
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
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'NoteFox';
  selectedNote: Note;
  notes = NOTES;
  onSelect(note: Note): void {
    this.selectedNote = note;
  }
  NewNote() {
    NOTES.push({ id: 20, name: 'New Note' , text:' ' });
    this.selectedNote = NOTES[NOTES.length-1];
  }
}


