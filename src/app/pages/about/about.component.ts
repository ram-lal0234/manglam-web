import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  values = [
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'We pour our heart into every event, ensuring each detail reflects our commitment to excellence.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create unique and memorable experiences.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description: 'Building trust through transparency and honest relationships with our clients.'
    }
  ];

  offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 100',
      phone: '+1 (415) 555-0123',
      email: 'sf@eventplanner.com',
      image: 'assets/images/offices/san-francisco.jpg',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'New York',
      address: '456 Madison Avenue, 15th Floor',
      phone: '+1 (212) 555-0123',
      email: 'nyc@eventplanner.com',
      image: 'assets/images/offices/new-york.jpg',
      timezone: 'EST (UTC-5)'
    },
    {
      city: 'London',
      address: '789 Oxford Street, Westminster',
      phone: '+44 20 7123 4567',
      email: 'london@eventplanner.com',
      image: 'assets/images/offices/london.jpg',
      timezone: 'GMT (UTC+0)'
    },
    {
      city: 'Singapore',
      address: '321 Marina Bay Sands',
      phone: '+65 6789 0123',
      email: 'singapore@eventplanner.com',
      image: 'assets/images/offices/singapore.jpg',
      timezone: 'SGT (UTC+8)'
    }
  ];

  milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a small team of passionate event planners'
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Opened offices in London and Singapore'
    },
    {
      year: '2018',
      title: 'Digital Innovation',
      description: 'Launched virtual event planning services'
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as top event planning company globally'
    }
  ];

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
            } else if (entry.target.classList.contains('bounce-in')) {
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