import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFactionComponent } from './character-faction.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle errors when data is not found', () => {
    const expectedMessage = 'Not found';
    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/character-factions'
    );
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
    expect(component.errorMessage).toEqual(expectedMessage);
  });

  it('should correctly fetch a list of character factions', () => {
    const mockCharFactionData = [
      {
        name: 'Faction 1',
        description: 'Faction 1 description',
      },
      {
        name: 'Faction 2',
        description: 'Faction 2 description',
      },
    ];

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/character-factions'
    );
    req.flush(mockCharFactionData);

    expect(component.charFactions).toEqual(mockCharFactionData);
  });

  it('should update the characterFactions div when character factions are found', () => {
    const mockCharFactionData = [
      {
        name: 'Faction 1',
        description: 'Faction 1 description',
      },
      {
        name: 'Faction 2',
        description: 'Faction 2 description',
      },
    ];

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/character-factions'
    );
    req.flush(mockCharFactionData);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const charFactionRows = compiled.querySelectorAll('tbody > tr'); // Get all the character faction rows from the table

    // Expect the number of rows to equal to the number of character factions
    expect(charFactionRows.length).toEqual(component.charFactions.length);
  });
});
