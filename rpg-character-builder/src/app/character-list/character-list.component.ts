import { Component, Input } from '@angular/core';
import { Character } from '../create-character/create-character.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  template: `
    <h2>Created Characters</h2>
    @if (characters.length > 0) {
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        @for (character of characters; track character) {
        <tr>
          <td>{{ character.name }}</td>
          <td>{{ character.gender }}</td>
          <td>{{ character.class }}</td>
        </tr>
        }
      </tbody>
    </table>
    } @else {
    <p>No characters have been created yet</p>
    }
  `,
  styles: `
  table {
        border: 1px solid #bb6528;
        border-collapse: collapse;
        margin: 0 auto;
        width: 100%;
      }

      th,
      td {
        border: 1px solid #bb6528;
      }

      td {
        text-align: center;
      }

      th {
        background-color: #bb6528;
        color: #fff;
      }

      tr:nth-child(even) {
        background-color: #ffebcd;
      }
  `,
})
export class CharacterListComponent {
  @Input() characters!: Character[];

  constructor() {
    this.characters = [];
  }
}
