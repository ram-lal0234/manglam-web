import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private scrollObservable: Observable<number>;

  constructor() {
    this.scrollObservable = fromEvent(window, 'scroll').pipe(
      debounceTime(10),
      map(() => window.scrollY),
      startWith(window.scrollY)
    );
  }

  initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => observer.observe(element));
  }

  initParallax() {
    this.scrollObservable.subscribe(scrollY => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  initStickyHeader() {
    const header = document.querySelector('.sticky-header');
    if (!header) return;

    this.scrollObservable.subscribe(scrollY => {
      if (scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  initHoverEffects() {
    const hoverElements = document.querySelectorAll('.hover-lift, .hover-glow');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('hover-active');
      });
      element.addEventListener('mouseleave', () => {
        element.classList.remove('hover-active');
      });
    });
  }
} 