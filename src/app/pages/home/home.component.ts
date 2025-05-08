import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  keyframes,
} from '@angular/animations';
import { every, first } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AvatarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ transform: 'scale(0.3)', opacity: 0 }),
        animate('500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
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
            style({ transform: 'translateY(0)' }),
          ])
        ),
      ]),
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('rotateIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(-180deg) scale(0)' }),
        animate(
          '0.8s ease-out',
          style({ opacity: 1, transform: 'rotate(0) scale(1)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  isDarkMode = false;

  services = [
    {
      icon: 'fas fa-globe-asia',
      title: 'Destination Wedding',
      description: 'Transform your dream destination wedding into reality with our expert planning and execution.',
      image: 'assets/images/event-bg.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Wedding Planning',
      description: 'Comprehensive wedding planning services that cover every detail of your special day.',
      image: '../../../assets/images/services/wedding-planning.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Venue Selection',
      description: 'Find the perfect venue that matches your vision and requirements.',
      image: '../../../assets/images/services/venue-selection.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    }
  ];

  stats = [
    { value: '500+', label: 'Events Planned' },
    { value: '100+', label: 'Happy Clients' },
    { value: '50+', label: 'Destinations' }
  ];

  testimonials = [
    {
      name: 'John Doe',
      role: 'Wedding Client',
      content: 'Manglam Event made our wedding day absolutely perfect. Their attention to detail and professionalism was outstanding.',
      avatar: ''
    },
    {
      name: 'Jane Smith',
      role: 'Corporate Event Client',
      content: 'The team at Manglam Event exceeded our expectations. They handled everything with precision and creativity.',
      avatar: ''
    },
    {
      name: 'Mike Johnson',
      role: 'Birthday Celebration Client',
      content: 'Our anniversary celebration was magical thanks to Manglam Event. They truly know how to create unforgettable moments.',
      avatar: ''
    }
  ];

  clientLogos = [
    'https://source.unsplash.com/random/200x100?logo1',
    'https://source.unsplash.com/random/200x100?logo2',
    'https://source.unsplash.com/random/200x100?logo3',
    'https://source.unsplash.com/random/200x100?logo4',
    'https://source.unsplash.com/random/200x100?logo5',
    'https://source.unsplash.com/random/200x100?logo6',
  ];

  ngOnInit() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    } else {
      // Check system preference
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  ngAfterViewInit() {
    this.initializeScrollAnimations();
  }

  private initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }
}
