// Interface for character data
export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="character-form-container">
      <h1>Character Creation</h1>

      <form
        class="character-form"
        #characterForm="ngForm"
        (ngSubmit)="createCharacter()"
      >
        <p>Use this form to create a new character</p>

        <label for="characterName">Name</label>
        <input
          type="text"
          id="characterName"
          name="characterName"
          [(ngModel)]="name"
          ngModel
        />

        <label for="characterGender">Gender</label>
        <select
          name="characterGender"
          id="characterGender"
          [(ngModel)]="gender"
          ngModel
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label for="characterClass">Class</label>
        <select
          name="characterClass"
          id="characterClass"
          [(ngModel)]="class"
          ngModel
        >
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>

        <input type="submit" value="Create Character" />
      </form>

      <div class="character-display">
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
      </div>
    </div>
  `,
  styles: [
    `
      /* styles for form */

      .character-form {
        border: 3px solid #bb6528;
        padding: 0 10px 10px 10px;
        width: fit-content;
        margin: 0 auto;
      }

      label {
        display: block;
      }

      input[type='submit'] {
        display: block;
        margin-top: 15px;
        border: none;
        border-radius: 10px;
        background-color: #32cd32;
        color: #fff;
        padding: 10px;
      }

      input[type='submit']:hover {
        background-color: #6fdc6f;
      }

      /* styles for table */

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
  ],
})
export class CreateCharacterComponent {
  characters: Character[];
  characterID: number = 0;
  name: string = '';
  gender: string = '';
  class: string = '';

  constructor() {
    this.characters = [];
  }

  createCharacter() {
    // Generate a random number between 1 and 1000
    //  with no decimal places for the character ID
    this.characterID = Math.floor(Math.random() * 1000) + 1;

    // Create a new character object
    const newCharacter: Character = {
      id: this.characterID,
      name: this.name,
      gender: this.gender,
      class: this.class,
    };

    // Insert the new character into the characters array and reset the form
    this.characters.push(newCharacter);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.gender = '';
    this.class = '';
  }
}
