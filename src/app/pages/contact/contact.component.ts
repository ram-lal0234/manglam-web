import { Component, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('float', [
      transition(':enter', [
        animate('3s ease-in-out infinite', keyframes([
          style({ transform: 'translateY(0)' }),
          style({ transform: 'translateY(-10px)' }),
          style({ transform: 'translateY(0)' })
        ]))
      ])
    ])
  ]
})
export class ContactComponent implements AfterViewInit {
  formSubmitted = false;
  contactInfo = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactDetails = [
    {
      title: 'Address',
      icon: 'fas fa-map-marker-alt',
      color: 'from-[var(--primary)] to-[var(--primary-light)]',
      details: [
        '123 Event Street',
        'New York, NY 10001',
        'United States'
      ]
    },
    {
      title: 'Phone',
      icon: 'fas fa-phone-alt',
      color: 'from-[var(--primary)] to-[var(--primary-light)]',
      details: [
        '+1 (555) 123-4567',
        '+1 (555) 987-6543'
      ]
    },
    {
      title: 'Email',
      icon: 'fas fa-envelope',
      color: 'from-[var(--primary)] to-[var(--primary-light)]',
      details: [
        'info@manglam.com',
        'support@manglam.com'
      ]
    },
    {
      title: 'Working Hours',
      icon: 'fas fa-clock',
      color: 'from-[var(--primary)] to-[var(--primary-light)]',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  ngAfterViewInit() {
    this.initializeScrollAnimations();
  }

  private initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.classList.contains('service-card')) {
            element.classList.add('animate-fade-in-up');
          } else if (element.classList.contains('stat-card')) {
            element.classList.add('animate-scale-in');
          } else if (element.classList.contains('testimonial-card')) {
            element.classList.add('animate-fade-in');
          }
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }

  onSubmit() {
    // Here you would typically handle the form submission
    // For now, we'll just show the success message
    this.formSubmitted = true;
    
    // Reset form after 5 seconds
    setTimeout(() => {
      this.formSubmitted = false;
      this.contactInfo = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    }, 5000);
  }
}