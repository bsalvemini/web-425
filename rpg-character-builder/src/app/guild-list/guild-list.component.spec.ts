import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildListComponent } from './guild-list.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display guilds correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const guildRows = compiled.querySelectorAll('tbody > tr'); // Get all the guildRows from the character table
    expect(guildRows.length).toEqual(component.guilds.length); // Expect the number of rows to equal to the number of guilds
  });

  it('should display a message for an empty guild list', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    expect(compiled.querySelector('p')?.textContent).toContain(
      'No guilds have been created yet'
    ); // Expect the p tag to contain "No guilds have been created yet"
  });
});
