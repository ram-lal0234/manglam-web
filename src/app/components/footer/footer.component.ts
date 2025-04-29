import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="container py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">
              <img
                src="assets/images/logo.png"
                alt="EventPro Logo"
                class="h-20 mb-2"
              />
            </h3>
            <p class="text-gray-400">
              Creating unforgettable moments, one event at a time.
            </p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li *ngFor="let link of quickLinks">
                <a
                  [routerLink]="link.path"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li *ngFor="let service of services">
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  {{ service }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Connect With Us</h4>
            <div class="flex space-x-4">
              <a
                *ngFor="let social of socials"
                [href]="social.url"
                target="_blank"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <i [class]="social.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {{ currentYear }} EventPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  services = [
    'Corporate Events',
    'Weddings',
    'Conferences',
    'Social Gatherings',
    'Product Launches',
  ];

  socials = [
    { icon: 'fab fa-facebook', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-linkedin', url: '#' },
  ];
}
