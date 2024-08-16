import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Welcome to RPG Character Builder!</h1>
    </div>
    <p>
      This site allows you to create and manage characters for Role Playing
      video games. This site was made for gamers and RPG enthusiasts. You can
      create many types of characters for many different Role Playing games on
      this site. You can choose a name for your character, their class, assign
      their stats, and much more. You can sign up for a free account to save and
      manage all of your characters. It's easy to sign up and it only takes a
      few minutes. You'll be creating characters in no time!
    </p>
    <p>This site supports creating characters for these popular Role Playing video games and more:</p>
    <ul class="game-list">
      <li>World of Warcraft</li>
      <li>The Baldur's Gate series</li>
      <li>The Elder Scrolls series</li>
      <li>The Dragon Age series</li>
      <li>The Witcher series</li>
      <li>The Monster Hunter series</li>
    </ul>
    <p>
      The site can also be used to create characters for interactive
      storytelling. Create characters for an epic fantasy story. This site
      allows you to keep all of your fantasy characters in one convenient place.
      Whether you are an avid RPG video game player or you write fantasy
      stories, the RPG Character Builder website has you covered.
    </p>
    <h2>You can create characters like these and more:</h2>
    <div class="characters-container">
      <div class="character">
        <h3>Create a Knight</h3>
        <!-- Image from: https://unsplash.com/photos/a-close-up-of-a-guitar-wJRrKtDvH80 -->
        <img
          src="/assets/carlos-felipe-ramirez-mesa-wJRrKtDvH80-unsplash.jpg"
          alt="Knight armor"
        />
        <p>
          Create a fierce knight. Give them a name, a class, their own epic back
          story, and more.
        </p>
        <div class="character">
          <h3>Create an Archer</h3>
          <!-- Image from: https://pixabay.com/illustrations/amazone-woman-warrior-heroine-613708/ -->
          <img src="/assets/amazone-613708_640.png" alt="Female archer" />
          <p>
            Create a powerful archer with a name, a class, an epic backstory,
            and more. You can customize their abilities, powers, and other
            aspects.
          </p>
        </div>
        <div class="character">
          <h3>Create a Sorcerer</h3>
          <!-- Image from: https://pixabay.com/photos/magician-sorcerer-wizard-magic-8490445/ -->
          <img src="/assets/magician-8490445_640.jpg" alt="A magician" />
          <p>
            Create a fearsome sorcerer. Give them powers, a backstory and more.
          </p>
        </div>
      </div>
      <div class="sign-up-btn-container">
        <a href="#" class="sign-up-btn">Sign Up Now!</a>
      </div>
    </div>
  `,
  styles: [
    `
      .sign-up-btn-container {
        padding: 10px;
      }

      .sign-up-btn {
        border-radius: 10px;
        text-decoration: none;
        background-color: #32cd32;
        color: #fff;
        padding: 10px;
      }

      .sign-up-btn:hover {
        background-color: #6fdc6f;
      }

      .game-list {
        padding-left: 20px;
      }
    `,
  ],
})
export class HomeComponent {}
