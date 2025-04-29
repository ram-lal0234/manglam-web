import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav
      [class.shadow-md]="isScrolled"
      class="fixed w-full bg-white z-50 transition-all duration-300"
    >
      <div class="container">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="text-2xl font-bold text-primary-600">
            <img src="assets/images/logo.png" alt="Logo" class="h-8" />
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <a
              *ngFor="let item of menuItems"
              [routerLink]="item.path"
              routerLinkActive="text-primary-600"
              class="text-gray-600 hover:text-primary-600 transition-colors"
            >
              {{ item.label }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="isMobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              *ngFor="let item of menuItems"
              [routerLink]="item.path"
              routerLinkActive="bg-primary-50 text-primary-600"
              (click)="toggleMobileMenu()"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
