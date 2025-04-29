import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  constructor(public authService: AuthService) {}

  categories = [
    { name: 'All', icon: 'fas fa-th-large' },
    { name: 'Corporate', icon: 'fas fa-briefcase' },
    { name: 'Weddings', icon: 'fas fa-heart' },
    { name: 'Social', icon: 'fas fa-users' },
    { name: 'Virtual', icon: 'fas fa-video' }
  ];

  selectedCategory = 'All';

  portfolioItems = [
    {
      title: 'Corporate Annual Gala',
      category: 'Corporate',
      image: 'assets/images/portfolio/corporate-gala.jpg',
      description: 'A spectacular evening celebrating company achievements',
      client: 'TechCorp Inc.',
      date: 'December 2023',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Beach Wedding Celebration',
      category: 'Weddings',
      image: 'assets/images/portfolio/beach-wedding.jpg',
      description: 'A romantic beachside ceremony and reception',
      client: 'Sarah & John',
      date: 'October 2023',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Virtual Conference',
      category: 'Virtual',
      image: 'assets/images/portfolio/virtual-conference.jpg',
      description: 'Global virtual conference with interactive sessions',
      client: 'Global Tech Summit',
      date: 'September 2023',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Birthday Extravaganza',
      category: 'Social',
      image: 'assets/images/portfolio/birthday-party.jpg',
      description: 'A memorable birthday celebration with themed decor',
      client: 'Private Client',
      date: 'August 2023',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      title: 'Product Launch Event',
      category: 'Corporate',
      image: 'assets/images/portfolio/product-launch.jpg',
      description: 'Innovative product launch with immersive experiences',
      client: 'InnovateTech',
      date: 'July 2023',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Garden Wedding',
      category: 'Weddings',
      image: 'assets/images/portfolio/garden-wedding.jpg',
      description: 'Elegant garden ceremony with natural elements',
      client: 'Emma & Michael',
      date: 'June 2023',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  stats = [
    {
      value: '200+',
      label: 'Events Completed',
      icon: 'fas fa-calendar-check',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      value: '50+',
      label: 'Corporate Clients',
      icon: 'fas fa-building',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      value: '100+',
      label: 'Wedding Ceremonies',
      icon: 'fas fa-heart',
      color: 'from-pink-500 to-rose-600'
    },
    {
      value: '20+',
      label: 'Awards Won',
      icon: 'fas fa-trophy',
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  get filteredItems() {
    if (this.selectedCategory === 'All') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === this.selectedCategory);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target.classList.contains('fade-up')) {
              entry.target.classList.add('translate-y-0');
            } else if (entry.target.classList.contains('fade-left')) {
              entry.target.classList.add('translate-x-0');
            } else if (entry.target.classList.contains('fade-right')) {
              entry.target.classList.add('translate-x-0');
            } else if (entry.target.classList.contains('scale-in')) {
              entry.target.classList.add('scale-100');
            }
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    this.animateElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }
}