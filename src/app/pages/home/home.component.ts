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
        animate(
          '0.5s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
              animate(
                '0.5s ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
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
        animate(
          '0.6s ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
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
      icon: 'fas fa-paint-brush',
      title: 'Wedding Decor',
      description: 'Rooted in tradition, adorned with elegance — our décor tells your story through colors, culture, and craft. At Manglam Event, we blend timeless rituals with artistic flair, creating a setting where heritage meets heart, and every detail feels like home.',
      image: 'assets/images/event-bg.jpg',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: 'fas fa-music',
      title: 'Wedding Entertainment',
      description: 'Let the music rise and the moments sparkle — we curate joy that dances through your celebration. At Manglam Event, wedding entertainment is an experience, where beats meet traditions, and every performance adds magic to your memories.',
      image: 'assets/images/services/entertainment.jpg',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: 'fas fa-star',
      title: 'Bride Groom Entry',
      description: 'Every love story deserves a grand beginning. At Manglam Event, we craft unforgettable bride and groom entries — moments where dreams walk in, hearts skip beats, and all eyes are on love making its way into forever.',
      image: 'assets/images/services/entry.jpg',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: 'fas fa-concierge-bell',
      title: 'Hospitality',
      description: 'With warmth in every gesture and care in every detail, we treat your guests like family. At Manglam Event, hospitality goes beyond service — it\'s about creating personalized experiences, from the first welcome ritual to seamless guest management, ensuring that every moment feels like home.',
      image: 'assets/images/services/hospitality.jpg',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: 'fas fa-camera',
      title: 'Wedding Photography & Videography',
      description: 'Every glance, every laugh, every tear — we capture the moments that speak louder than words. At Manglam Event, our candid photography and cinematic videography weave your love story into timeless visuals, preserving every authentic moment and every cinematic frame, so your memories live on forever.',
      image: 'assets/images/services/photography.jpg',
      color: 'from-gray-500 to-gray-600',
    },
    {
      icon: 'fas fa-dancing',
      title: 'Wedding Choreography',
      description: 'From the first step to the final twirl, we bring your dance dreams to life. At Manglam Event, our choreography blends grace and rhythm, crafting a performance that tells your story with every move — a magical dance that will be remembered long after the music fades.',
      image: 'assets/images/services/choreography.jpg',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Vendor Management',
      description: 'Behind every flawless celebration is a team of trusted artisans. At Manglam Event, we handle every detail with precision, from selecting the finest vendors to ensuring seamless coordination. Our expert vendor management guarantees that each element of your event aligns perfectly, creating a harmonious experience that reflects your vision.',
      image: 'assets/images/services/vendor.jpg',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: 'fas fa-truck',
      title: 'Logistics',
      description: 'In the dance of planning, every detail matters. At Manglam Event, we master the art of logistics, ensuring that every element of your celebration flows seamlessly. From the first moment to the last, our meticulous coordination guarantees that your event unfolds flawlessly, leaving you free to enjoy the magic of the moment.',
      image: 'assets/images/services/logistics.jpg',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Invitations & Gifting',
      description: 'The first glimpse of your celebration, an invitation that speaks of elegance and warmth. At Manglam Event, we craft personalized invites and thoughtful gifts that set the tone for your special day. Every detail, from the paper to the gesture, is a reflection of your love, leaving a lasting impression before the celebration even begins.',
      image: 'assets/images/services/invitations.jpg',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: 'fas fa-ring',
      title: 'Ring Ceremony',
      description: 'A moment where promises are made, and hearts are bound. At Manglam Event, we create a ring ceremony that reflects the depth of your love — a seamless blend of tradition and elegance, turning this simple exchange into an unforgettable celebration of commitment.',
      image: 'assets/images/services/ring.jpg',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: 'fas fa-birthday-cake',
      title: 'Birthdays',
      description: 'Birthdays are more than just a date — they are a celebration of life, laughter, and love. At Manglam Event, we craft unforgettable birthday experiences, filled with joy, surprises, and memories that linger. From intimate gatherings to grand festivities, we make every year more special than the last.',
      image: 'assets/images/services/birthday.jpg',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Corporate Events',
      description: 'Corporate events are not just about business; they are about building connections, celebrating achievements, and inspiring teams. At Manglam Event, we craft seamless experiences that blend professionalism with creativity, ensuring every gathering leaves a lasting impression and every detail reflects your company\'s vision.',
      image: 'assets/images/services/corporate.jpg',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: 'fas fa-print',
      title: 'Printing & Stationery',
      description: 'The finest details often lie in the smallest touches. At Manglam Event, we elevate your celebration with custom printing and stationery that reflect your unique style. From elegant invites to personalized keepsakes, every piece is crafted with care, setting the tone and adding a personal touch to your unforgettable day.',
      image: 'assets/images/services/printing.jpg',
      color: 'from-gray-500 to-gray-600',
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
      avatar: '../../../assets/images/testimonials/john-doe.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Corporate Event Client',
      content: 'The team at Manglam Event exceeded our expectations. They handled everything with precision and creativity.',
      avatar: '../../../assets/images/testimonials/jane-smith.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Birthday Celebration Client',
      content: 'Our anniversary celebration was magical thanks to Manglam Event. They truly know how to create unforgettable moments.',
      avatar: '../../../assets/images/testimonials/mike-johnson.jpg'
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
