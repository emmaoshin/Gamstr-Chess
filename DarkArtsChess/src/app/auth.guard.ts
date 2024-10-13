import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.loginWithRedirect();
      return true;
    }
    return false;
  }
}