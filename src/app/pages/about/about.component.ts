import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('float', [
      transition(':enter', [
        animate(
          '3s ease-in-out infinite',
          keyframes([
            style({ transform: 'translateY(0)' }),
            style({ transform: 'translateY(-10px)' }),
            style({ transform: 'translateY(0)' })
          ])
        )
      ])
    ])
  ]
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
            entry.target.classList.add('visible');
            // Add animation classes based on element type
            if (entry.target.classList.contains('service-card')) {
              entry.target.classList.add('animate-fade-in-up');
            } else if (entry.target.classList.contains('stat-card')) {
              entry.target.classList.add('animate-scale-in');
            } else if (entry.target.classList.contains('testimonial-card')) {
              entry.target.classList.add('animate-slide-in-up');
            }
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Observe all sections and animated elements
    document.querySelectorAll('.section, .service-card, .stat-card, .testimonial-card').forEach(element => {
      observer.observe(element);
    });
  }
}