import { Component, Input } from '@angular/core';
import { Guild } from '../create-guild/create-guild.component';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [],
  template: `
    @if (guilds.length > 0) {
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Notification preference</th>
        </tr>
      </thead>
      <tbody>
        @for (guild of guilds; track guild) {
        <tr>
          <td>{{ guild.guildName }}</td>
          <td>{{ guild.guildDesc }}</td>
          <td>{{ guild.guildType }}</td>
          <td>{{ guild.notificationPreference }}</td>
        </tr>
        }
      </tbody>
    </table>
    } @else {
    <p>No guilds have been created yet</p>
    }
  `,
  styles: `
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
export class GuildListComponent {
  @Input() guilds!: Guild[];

  constructor() {
    this.guilds = [];
  }
}
