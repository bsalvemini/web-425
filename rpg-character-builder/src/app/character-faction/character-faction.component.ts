import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [],
  template: `
    <h1>Character Faction</h1>
    @if (charFactions) {
    <div class="characterFactions">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          @for (faction of charFactions; track faction) {
          <tr>
            <td>{{ faction.name }}</td>
            <td>{{ faction.description }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
    } @else if(errorMessage) {
    <div class="characterFactions">
      <p class="error">Server down</p>
    </div>
    }
  `,
  styles: `
.error {
  font-size: x-large;
  font-weight: bold;
  color: red;
  }

  table {
  border: 1px solid #bb6528;
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
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
export class CharacterFactionComponent {
  charFactions: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/character-factions').subscribe({
      next: (res) => {
        console.log(res);
        this.charFactions = res;
      },
      error: (err) => {
        console.log('err: ', err);
        this.errorMessage = err.error;
      },
    });
  }
}
