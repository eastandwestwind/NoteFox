import { Component, Input } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'my-note-detail',
  template: `
  <div *ngIf="note">
    <span>name: <input [(ngModel)]="note.name" placeholder="name"/></span>
  <div>
  <div>
  <button class="SetColor SetBlue" ng-click="icon= fa fa-pencil-square"><fa><i class='fa fa-pencil-square'></i></fa></button>
  <button class="SetColor SetGreen" ng-click="icon= fa fa-pencil-square"></button>
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
      border-style: none;
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
