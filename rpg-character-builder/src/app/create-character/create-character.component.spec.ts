import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.createCharacter(); // Triggers the creation of a new character ID
    expect(component.characterID).toBeGreaterThan(0);
    expect(component.characterID).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.characterID)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    // character ID was purposely omitted from this test as it is randomly generated
    //  in the createCharacter() method
    component.name = 'Sylastris';
    component.gender = 'Female';
    component.class = 'Mage';
    component.createCharacter();
    const newCharacter = component.characters[0];

    expect(newCharacter.name).toBe('Sylastris');
    expect(newCharacter.gender).toBe('Female');
    expect(newCharacter.class).toBe('Mage');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    // character ID was purposely omitted from this test as it is not part of the form
    component.name = 'Sylastris';
    component.gender = 'Female';
    component.class = 'Mage';

    component.resetForm();

    expect(component.name).toBe('');
    expect(component.gender).toBe('');
    expect(component.class).toBe('');
  });
});
