import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl : './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  contactInfo = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactDetails = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      details: ['123 Event Street', 'New York, NY 10001', 'United States'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['info@eventpro.com', 'support@eventpro.com'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  formSubmitted = false;

  onSubmit() {
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    this.formSubmitted = true;
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