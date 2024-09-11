export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject(<boolean>false);

  constructor(private cookieService: CookieService, private router: Router) {
    // This data was generated using mockaroo.com
    this.users = [
      {
        empId: 1048,
        email: 'hshearmer0@squarespace.com',
        password: 'oV8}k61rZA}iK',
      },
      {
        empId: 8853,
        email: 'hmeriguet1@google.pl',
        password: 'wK2MgysOnAUqAD_',
      },
      {
        empId: 5601,
        email: 'zwilliamson2@qq.com',
        password: 'kF3AU.8+?my',
      },
      {
        empId: 3325,
        email: 'ejosselson3@feedburner.com',
        password: 'xF3=nmtw0L',
      },
    ];
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
