import { Component, Input } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'my-note-detail',
  template: `
  <div *ngIf="note">
    <h2>{{note.name}}</h2>
  <div>
    <label>name: </label>
  <input [(ngModel)]="note.name" placeholder="name"/>
  <div><label>id: </label>{{note.id}}</div>
  <input [(ngModel)]="note.text" placeholder="type here"/>
  </div>
  </div>
  <!--if new note-->
  <div *ngIf="NewNote">
    <h2>{{note.name}}</h2>
  <div>
    <label>name: </label>
  <input [(ngModel)]="note.name" placeholder="name"/>
  <div><label>id: </label>{{note.id}}</div>
  <input [(ngModel)]="note.text" placeholder="type here"/>
  </div>
  </div>
  `
})

export class NoteContentComponent {
  @Input()
  note: Note;
}
