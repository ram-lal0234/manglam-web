import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
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
    ])
  ]
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  services = [
    {
      icon: 'fas fa-globe-asia',
      title: 'Destination Wedding',
      description: 'Transform your dream destination wedding into reality with our expert planning and execution.',
      image: '../../../assets/images/services/destination-wedding.jpg',
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
    },
    {
      icon: 'fas fa-utensils',
      title: 'Catering Services',
      description: 'Exquisite culinary experiences tailored to your event and preferences.',
      image: '../../../assets/images/services/catering.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-music',
      title: 'Entertainment',
      description: 'Professional entertainment services to keep your guests engaged and entertained.',
      image: '../../../assets/images/services/entertainment.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-camera',
      title: 'Photography & Videography',
      description: 'Capture your special moments with our professional photography and videography services.',
      image: '../../../assets/images/services/photography.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Decoration',
      description: 'Transform your venue with our creative and elegant decoration services.',
      image: '../../../assets/images/services/decoration.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-gift',
      title: 'Gift & Favors',
      description: 'Thoughtful gifts and favors to make your event even more special.',
      image: '../../../assets/images/services/gifts.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-car',
      title: 'Transportation',
      description: 'Reliable transportation services for you and your guests.',
      image: '../../../assets/images/services/transportation.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-hotel',
      title: 'Accommodation',
      description: 'Comfortable accommodation arrangements for your guests.',
      image: '../../../assets/images/services/accommodation.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-ring',
      title: 'Jewelry & Accessories',
      description: 'Elegant jewelry and accessories to complete your look.',
      image: '../../../assets/images/services/jewelry.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-tshirt',
      title: 'Bridal & Groom Wear',
      description: 'Stunning bridal and groom wear collections for your special day.',
      image: '../../../assets/images/services/bridal-wear.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-spa',
      title: 'Beauty & Makeup',
      description: 'Professional beauty and makeup services to enhance your natural beauty.',
      image: '../../../assets/images/services/beauty.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-heart',
      title: 'Mehendi & Sangeet',
      description: 'Traditional mehendi and sangeet ceremonies with modern touches.',
      image: '../../../assets/images/services/mehendi.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-praying-hands',
      title: 'Religious Ceremonies',
      description: 'Traditional religious ceremonies conducted with respect and authenticity.',
      image: '../../../assets/images/services/religious.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Vendor Management',
      description: 'Comprehensive vendor management to ensure everything runs smoothly.',
      image: '../../../assets/images/services/vendor.jpg',
      color: 'from-[rgb(172,20,36)]/80 to-transparent'
    }
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

  ngOnInit() {
    // Additional initialization logic if needed
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.animateElements.forEach((element) => {
      observer.observe(element.nativeElement);
    });
  }
}
