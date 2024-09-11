import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CookieService', ['set', 'deleteAll']);
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: CookieService, useValue: spy }],
    });
    service = TestBed.inject(AuthService);
    cookieServiceSpy = TestBed.inject(
      CookieService
    ) as jasmine.SpyObj<CookieService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set cookie and authState to true on successful sign in', () => {
    const result = service.signin(
      'hshearmer0@squarespace.com',
      'oV8}k61rZA}iK'
    );
    expect(result).toBeTrue();
    expect(
      service.getAuthState().subscribe((state) => expect(state).toBeTrue())
    );
    expect(cookieServiceSpy.set.calls.count()).toBe(1);
  });

  it('should not set cookie and authState to true on unsuccessful sign in', () => {
    const result = service.signin('wrongemail@incorrect.com', 'wrongpass');
    expect(result).toBeFalse();
    expect(
      service.getAuthState().subscribe((state) => expect(state).toBeFalse())
    );
    expect(cookieServiceSpy.set.calls.count()).toBe(0);
  });
});
