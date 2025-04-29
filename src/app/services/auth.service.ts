import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Check if user is logged in (you can check localStorage or session storage)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isAuthenticatedSubject.next(isLoggedIn);
  }

  // Basic login/logout methods
  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Google Authentication
  async loginWithGoogle(): Promise<void> {
    // Here you would implement actual Google authentication
    // For now, we'll simulate it
    return new Promise((resolve) => {
      setTimeout(() => {
        this.login();
        resolve();
      }, 1000);
    });
  }

  // Email Authentication
  async loginWithEmail(email: string, password: string): Promise<void> {
    // Here you would implement actual email authentication
    // For now, we'll simulate it
    return new Promise((resolve) => {
      setTimeout(() => {
        this.login();
        resolve();
      }, 1000);
    });
  }

  // Phone Authentication
  async loginWithPhone(phone: string): Promise<void> {
    // Here you would implement actual phone authentication
    // For now, we'll simulate it
    return new Promise((resolve) => {
      setTimeout(() => {
        this.login();
        resolve();
      }, 1000);
    });
  }
} 