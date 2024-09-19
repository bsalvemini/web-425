import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="create-guild-form-container">
      <form
        [formGroup]="createGuildForm"
        class="create-guild-form"
        (ngSubmit)="createGuild(); createGuildForm.reset()"
      >
        <h1>Complete the form below to create a guild.</h1>
        <fieldset>
          <legend>Create Guild Form</legend>
          <label for="guildName">Guild Name</label>
          <input type="text" id="guildName" formControlName="guildName" />

          <label for="description">Guild Description</label>
          <textarea
            rows="10"
            id="description"
            formControlName="description"
          ></textarea>

          <label for="type">Guild Type</label>
          <select name="type" id="type" formControlName="type">
            @for (option of typeOptions; track option) {
            <option [value]="option">{{ option }}</option>
            }</select
          ><br />

          <label>Notification preference</label>
          @for (pref of notifPrefs; track pref) {
          <input
            type="radio"
            [value]="pref"
            formControlName="notificationPreference"
          />{{ pref }}<br />
          }

          <label for="acceptTerms">I accept the terms and conditions</label>
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            formControlName="acceptTerms"
          />

          <input
            type="submit"
            [disabled]="!createGuildForm.valid"
            value="Create Guild"
          />
        </fieldset>
      </form>

      <div class="guild-display">
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
      </div>
    </div>
  `,
  styles: `

  /* styles for form */

  .create-guild-form-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
  }

  fieldset {
    border-color: #bb6528;
    background-color: #ffebcd;
  }

  legend {
    background-color: #bb6528;
    padding: 5px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  label[for=acceptTerms] {
    display: inline;
  }

  input[type="submit"] {
    float: right;
  }

  textarea {
    width: 100%
  }

  /* styles for table */

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
export class CreateGuildComponent {
  typeOptions: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notifPrefs: string[] = ['Email', 'SMS', 'In-App'];
  guilds: any;

  createGuildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [null, Validators.compose([Validators.required])],
    notificationPreference: [null, Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder) {
    this.guilds = [];
  }

  createGuild() {
    // Create new guild object
    const newGuild = {
      guildName: this.createGuildForm.value.guildName,
      guildDesc: this.createGuildForm.value.description,
      guildType: this.createGuildForm.value.type,
      acceptTerms: this.createGuildForm.value.acceptTerms,
      notificationPreference: this.createGuildForm.value.notificationPreference,
    };

    console.log(newGuild);

    // Push the new guild into the guilds array
    this.guilds.push(newGuild);
  }
}
