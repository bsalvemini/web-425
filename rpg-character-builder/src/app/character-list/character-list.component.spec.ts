import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display characters correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const characterRows = compiled.querySelectorAll('tbody > tr'); // Get all the characterRows from the character table
    expect(characterRows.length).toEqual(component.characters.length); // Expect the number of rows to equal to the number of characters
  });

  it('should display a message for an empty character list', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    expect(compiled.querySelector('p')?.textContent).toContain(
      'No characters have been created yet'
    ); // Expect the p tag to contain "No characters have been created yet"
  });
});
