import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  services = [
    {
      title: 'Destination Wedding',
      icon: 'fas fa-plane',
      description:
        'At Manglam Event, destination weddings aren’t just events — they’re stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.',
      features: [
        'Full Wedding Planning',
        'Destination Weddings',
        'Wedding Day Coordination',
        'Vendor Management',
        'Decor & Design',
        'Budget Management',
      ],
      image: 'assets/images/services/corporate.jpg',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Wedding Planning',
      icon: 'fas fa-heart',
      description:
        'Creating your perfect day with meticulous attention to detail.',
      features: [
        'Full Wedding Planning',
        'Destination Weddings',
        'Wedding Day Coordination',
        'Vendor Management',
        'Decor & Design',
        'Budget Management',
      ],
      image: 'assets/images/services/wedding.jpg',
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Social Events',
      icon: 'fas fa-glass-cheers',
      description: `Celebrate life's special moments with style and elegance.`,
      features: [
        'Birthday Parties',
        'Anniversary Celebrations',
        'Graduation Parties',
        'Holiday Events',
        'Private Dinners',
        'Themed Parties',
      ],
      image: 'assets/images/services/social.jpg',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Virtual Events',
      icon: 'fas fa-laptop',
      description: 'Engaging online experiences for the digital age.',
      features: [
        'Virtual Conferences',
        'Hybrid Events',
        'Webinars',
        'Online Team Building',
        'Virtual Award Shows',
        'Digital Product Launches',
      ],
      image: 'assets/images/services/virtual.jpg',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  benefits = [
    {
      icon: 'fas fa-award',
      title: 'Expert Team',
      description:
        'Experienced professionals dedicated to making your event perfect.',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Personalized Approach',
      description:
        'Tailored solutions that match your unique vision and requirements.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Delivery',
      description:
        'Efficient planning and execution that meets your deadlines.',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Quality Assurance',
      description:
        'Rigorous quality checks to ensure flawless event execution.',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
        threshold: 0.1,
      }
    );

    this.animateElements.forEach((element) => {
      observer.observe(element.nativeElement);
    });
  }
}
