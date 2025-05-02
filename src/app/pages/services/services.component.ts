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
  styleUrls: ['./services.component.scss'],
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
      title: 'Destination Weddings',
      description: 'At Manglam Event, destination weddings aren\'t just events — they\'re stories written in sunsets, woven through waves, and sealed with memories that linger long after the vows. Let your dream unfold, wherever your heart takes you.',
      image: 'assets/images/event-bg.jpg',
      icon: 'fas fa-plane-departure'
    },
    {
      title: 'Wedding Planning',
      description: 'Every love story is unique, and so is the way we bring it to life. At Manglam Event, we turn dreams into celebrations, weaving magic into every detail. From the first petal to the final toast, we plan with heart, creating weddings that feel as timeless as your love.',
      image: '../../../assets/images/services/wedding-planning.jpg',
      icon: 'fas fa-heart'
    },
    {
      title: 'Venue Selection',
      description: 'The perfect moment begins with the perfect place. At Manglam Event, we don\'t just find venues — we discover backdrops for your story. Whether it\'s under open skies or within royal walls, we match your dreams with spaces that speak your love language.',
      image: '../../../assets/images/services/venue-selection.jpg',
      icon: 'fas fa-map-marker-alt'
    },
    {
      title: 'Wedding Decor',
      description: 'Rooted in tradition, adorned with elegance — our décor tells your story through colors, culture, and craft. At Manglam Event, we blend timeless rituals with artistic flair, creating a setting where heritage meets heart, and every detail feels like home.',
      image: '../../../assets/images/services/wedding-decor.jpg',
      icon: 'fas fa-paint-brush'
    },
    {
      title: 'Wedding Entertainment',
      description: 'Let the music rise and the moments sparkle — we curate joy that dances through your celebration. At Manglam Event, wedding entertainment is an experience, where beats meet traditions, and every performance adds magic to your memories.',
      image: '../../../assets/images/services/wedding-entertainment.jpg',
      icon: 'fas fa-music'
    },
    {
      title: 'Bride & Groom Entry',
      description: 'Every love story deserves a grand beginning. At Manglam Event, we craft unforgettable bride and groom entries — moments where dreams walk in, hearts skip beats, and all eyes are on love making its way into forever.',
      image: '../../../assets/images/services/bride-groom-entry.jpg',
      icon: 'fas fa-walking'
    },
    {
      title: 'Hospitality',
      description: 'With warmth in every gesture and care in every detail, we treat your guests like family. At Manglam Event, hospitality goes beyond service — it\'s about creating personalized experiences, from the first welcome ritual to seamless guest management, ensuring that every moment feels like home.',
      image: '../../../assets/images/services/hospitality.jpg',
      icon: 'fas fa-hands-helping'
    },
    {
      title: 'Wedding Photography & Videography',
      description: 'Every glance, every laugh, every tear — we capture the moments that speak louder than words. At Manglam Event, our candid photography and cinematic videography weave your love story into timeless visuals, preserving every authentic moment and every cinematic frame, so your memories live on forever.',
      image: '../../../assets/images/services/photography.jpg',
      icon: 'fas fa-camera'
    },
    {
      title: 'Wedding Choreography',
      description: 'From the first step to the final twirl, we bring your dance dreams to life. At Manglam Event, our choreography blends grace and rhythm, crafting a performance that tells your story with every move — a magical dance that will be remembered long after the music fades.',
      image: '../../../assets/images/services/choreography.jpg',
      icon: 'fas fa-dancing'
    },
    {
      title: 'Vendor Management',
      description: 'Behind every flawless celebration is a team of trusted artisans. At Manglam Event, we handle every detail with precision, from selecting the finest vendors to ensuring seamless coordination. Our expert vendor management guarantees that each element of your event aligns perfectly, creating a harmonious experience that reflects your vision.',
      image: '../../../assets/images/services/vendor-management.jpg',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Logistics',
      description: 'In the dance of planning, every detail matters. At Manglam Event, we master the art of logistics, ensuring that every element of your celebration flows seamlessly. From the first moment to the last, our meticulous coordination guarantees that your event unfolds flawlessly, leaving you free to enjoy the magic of the moment.',
      image: '../../../assets/images/services/logistics.jpg',
      icon: 'fas fa-truck'
    },
    {
      title: 'Invitations & Gifting',
      description: 'The first glimpse of your celebration, an invitation that speaks of elegance and warmth. At Manglam Event, we craft personalized invites and thoughtful gifts that set the tone for your special day. Every detail, from the paper to the gesture, is a reflection of your love, leaving a lasting impression before the celebration even begins.',
      image: '../../../assets/images/services/invitations.jpg',
      icon: 'fas fa-envelope'
    },
    {
      title: 'Ring Ceremony',
      description: 'A moment where promises are made, and hearts are bound. At Manglam Event, we create a ring ceremony that reflects the depth of your love — a seamless blend of tradition and elegance, turning this simple exchange into an unforgettable celebration of commitment.',
      image: '../../../assets/images/services/ring-ceremony.jpg',
      icon: 'fas fa-ring'
    },
    {
      title: 'Birthdays',
      description: 'Birthdays are more than just a date — they are a celebration of life, laughter, and love. At Manglam Event, we craft unforgettable birthday experiences, filled with joy, surprises, and memories that linger. From intimate gatherings to grand festivities, we make every year more special than the last.',
      image: '../../../assets/images/services/birthdays.jpg',
      icon: 'fas fa-birthday-cake'
    },
    {
      title: 'Corporate Events',
      description: 'Corporate events are not just about business; they are about building connections, celebrating achievements, and inspiring teams. At Manglam Event, we craft seamless experiences that blend professionalism with creativity, ensuring every gathering leaves a lasting impression and every detail reflects your company\'s vision.',
      image: '../../../assets/images/services/corporate-events.jpg',
      icon: 'fas fa-briefcase'
    },
    {
      title: 'Printing & Stationery',
      description: 'The finest details often lie in the smallest touches. At Manglam Event, we elevate your celebration with custom printing and stationery that reflect your unique style. From elegant invites to personalized keepsakes, every piece is crafted with care, setting the tone and adding a personal touch to your unforgettable day.',
      image: '../../../assets/images/services/printing.jpg',
      icon: 'fas fa-print'
    }
  ];

  benefits = [
    {
      title: 'Expert Team',
      description: 'Our experienced professionals handle every aspect of your event with precision and care.',
      icon: 'fas fa-users'
    },
    {
      title: 'Custom Solutions',
      description: 'We create personalized experiences tailored to your unique vision and requirements.',
      icon: 'fas fa-puzzle-piece'
    },
    {
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in every service we provide.',
      icon: 'fas fa-award'
    },
    {
      title: 'Stress-Free Planning',
      description: 'Let us handle the details while you enjoy the journey to your special day.',
      icon: 'fas fa-heart'
    }
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
