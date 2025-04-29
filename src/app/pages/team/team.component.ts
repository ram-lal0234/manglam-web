import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'assets/images/team/sarah.jpg',
      bio: '15+ years of event planning experience',
      social: {
        linkedin: 'https://linkedin.com/in/sarah',
        twitter: 'https://twitter.com/sarah',
        instagram: 'https://instagram.com/sarah'
      },
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: 'assets/images/team/michael.jpg',
      bio: 'Award-winning event designer',
      social: {
        linkedin: 'https://linkedin.com/in/michael',
        twitter: 'https://twitter.com/michael',
        instagram: 'https://instagram.com/michael'
      },
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Event Manager',
      image: 'assets/images/team/emma.jpg',
      bio: 'Specialized in corporate events',
      social: {
        linkedin: 'https://linkedin.com/in/emma',
        twitter: 'https://twitter.com/emma',
        instagram: 'https://instagram.com/emma'
      },
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'David Kim',
      role: 'Technical Director',
      image: 'assets/images/team/david.jpg',
      bio: 'Expert in virtual event technology',
      social: {
        linkedin: 'https://linkedin.com/in/david',
        twitter: 'https://twitter.com/david',
        instagram: 'https://instagram.com/david'
      },
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Lisa Patel',
      role: 'Marketing Director',
      image: 'assets/images/team/lisa.jpg',
      bio: 'Digital marketing strategist',
      social: {
        linkedin: 'https://linkedin.com/in/lisa',
        twitter: 'https://twitter.com/lisa',
        instagram: 'https://instagram.com/lisa'
      },
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      image: 'assets/images/team/james.jpg',
      bio: 'Logistics and planning expert',
      social: {
        linkedin: 'https://linkedin.com/in/james',
        twitter: 'https://twitter.com/james',
        instagram: 'https://instagram.com/james'
      },
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  values = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new ideas and technologies',
      icon: 'fas fa-lightbulb',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering exceptional experiences',
      icon: 'fas fa-star',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve great results',
      icon: 'fas fa-users',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency',
      icon: 'fas fa-shield-alt',
      color: 'from-purple-400 to-indigo-500'
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