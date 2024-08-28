import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Created by default when the component is generated
   * Unit test 1
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit test 2
   */
  it('should correctly display a list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const characterRow = compiled.querySelectorAll('.character-row'); // Get all the character rows
    expect(characterRow.length).toEqual(component.characters.length); // Check if the number of character rows is equal to the number of items in the character array
  });
});
