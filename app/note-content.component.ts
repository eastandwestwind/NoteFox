import { Component, Input } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'my-note-detail',
  template: `
  <div *ngIf="note">
    <span>name: <input [(ngModel)]="note.name" placeholder="name"/></span>
  <div>
  <div>
  <button class="SetColor SetBlue" ng-click="color={'background-color':'blue'}"></button>
  <button class="SetColor SetGreen" ng-click="color={'background-color':'red'}"></button>
  </div>
  <textarea [(ngModel)]="note.text" placeholder="type here" rows="10"></textarea>
  </div>
  </div>
  `,
  styles: [`
    .SetColor{
      height: 20px;
      width: 20px;
      border-radius: 0px;
    }
    .SetBlue {
      background-color: aquamarine;
    }
    .SetGreen {
      background-color: red;
    }
`]
})

export class NoteContentComponent {
  @Input()
  note: Note;
}
