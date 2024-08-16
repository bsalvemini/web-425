import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <div class="wrapper">
    <header class="banner">
      <h1>RPG Character Builder</h1>
    </header>
    <main class="main-content">
      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a href="#">Players</a></li>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Create Character</a></li>
        </ul>
      </nav>
      <section class="content">
        <router-outlet/>
      </section>
    </main>
    <footer class="footer">
      <nav class="footer-nav">
          <a routerLink="/">Home</a>
          <a href="#">Players</a>
          <a href="#">Sign In</a>
          <a href="#">Create Character</a>
      </nav>
      <p>&copy; 2024 RPG Character Builder</p>
    </footer>

  </div>
  `,
  styles: [
    `

    `
  ]
})
export class AppComponent {
}
