import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [{ path: 'players', component: PlayersComponent }];

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes), // Include RouterTestingModule to handle routing
        PlayersComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /** Week 3: unit test 3 */
  it('should have correct route for PlayersComponent', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find((r) => r.path === 'players');
    expect(route).toBeDefined(); // Check if the route is defined
    expect(route?.component).toBe(PlayersComponent); // Check if the component is MenuComponent
  });
});
