export interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Characters</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Faction</th>
            <th>Starting Location</th>
            <th>Fun Fact</th>
          </tr>
        </thead>
        <tbody>
          @for (character of characters; track character) {
          <tr class="character-row">
            <td>{{ character.name }}</td>
            <td>{{ character.gender }}</td>
            <td>{{ character.class }}</td>
            <td>{{ character.faction }}</td>
            <td>{{ character.startingLocation }}</td>
            <td>{{ character.funFact }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      table {
        border: 1px solid #bb6528;
        border-collapse: collapse;
        margin: 0 auto;
        width: 100%;
      }

      th,
      td {
        border: 1px solid #bb6528;
        padding: 1%;
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
  ],
})
export class PlayersComponent {
  characters: Character[];

  constructor() {
    this.characters = [
      {
        name: 'Thorn',
        gender: 'Male',
        class: 'Warrior',
        faction: 'The Iron Brotherhood',
        startingLocation: 'Ironhold',
        funFact: 'Thorn once single-handedly defeated a dragon.',
      },
      {
        name: 'Sylastris',
        gender: 'Female',
        class: 'Mage',
        faction: 'Horde',
        startingLocation: 'Nighthold',
        funFact: 'Has an affinity for conjuring illusions.',
      },
      {
        name: 'Riven',
        gender: 'Female',
        class: 'Rouge',
        faction: 'Ravenholdt',
        startingLocation: 'Sunstrider Isle',
        funFact:
          'Known for their ability to harness the power of the shadows in battle.',
      },
      {
        name: 'Finnegan',
        gender: 'Male',
        class: 'Warrior',
        faction: 'Voldunai',
        startingLocation: 'Valley of Honor',
        funFact: 'Fights his battles with a smile on his face.',
      },
      {
        name: 'Malachi',
        gender: 'Male',
        class: 'Mage',
        faction: 'Darkspear Trolls',
        startingLocation: "Dazar'alor",
        funFact: 'Leaves a trail of scorching destruction in his wake.',
      },
      {
        name: 'Vesper',
        gender: 'Female',
        class: 'Rouge',
        faction: 'Ravenholdt',
        startingLocation: 'The Vindicaar',
        funFact: 'Instills fear in anyone who dares to cross her.',
      },
      {
        name: 'Ao',
        gender: 'Female',
        class: 'Warrior',
        faction: 'Voldunai',
        startingLocation: 'Shang Xi Training Grounds',
        funFact:
          'Her heart burns with the eternal flame, empowering her with limitless courage.',
      },
      {
        name: 'Sylvius',
        gender: 'Male',
        class: 'Mage',
        faction: 'Gnomeregan',
        startingLocation: 'Chill Breeze Valley',
        funFact: 'Is able to communicate with plants.',
      },
      {
        name: 'Dominic',
        gender: 'Male',
        class: 'Rouge',
        faction: 'Alliance',
        startingLocation: 'Northshire Valley',
        funFact: 'Orchestrates his attacks with deadly precision.',
      },
      {
        name: 'Lyndara',
        gender: 'Female',
        class: 'Warrior',
        faction: 'Darnassus',
        startingLocation: 'Shadowglen',
        funFact:
          'Silently strikes her foes before they even know she is there.',
      },
    ];
  }
}
