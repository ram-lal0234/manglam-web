import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  event = {
    id: 1,
    title: 'Tech Summit 2023',
    category: 'Corporate',
    client: 'TechCorp Inc.',
    date: 'June 15-17, 2023',
    location: 'San Francisco Convention Center',
    description: 'A three-day technology conference bringing together industry leaders, innovators, and tech enthusiasts.',
    attendance: '1000+',
    services: [
      'Event Strategy & Planning',
      'Venue Selection & Management',
      'Speaker Coordination',
      'Technical Production',
      'Virtual Component Integration',
      'On-site Management'
    ],
    highlights: [
      'Keynote speeches from tech industry leaders',
      'Interactive workshop sessions',
      'Networking opportunities',
      'Product showcase area',
      'Live streaming to virtual attendees'
    ],
    images: [
      'assets/images/portfolio/tech-summit/main-stage.jpg',
      'assets/images/portfolio/tech-summit/workshop.jpg',
      'assets/images/portfolio/tech-summit/networking.jpg',
      'assets/images/portfolio/tech-summit/product-demo.jpg'
    ],
    testimonial: {
      quote: 'The team delivered an exceptional experience that exceeded our expectations. The perfect blend of professional organization and innovative thinking.',
      author: 'Sarah Chen',
      position: 'Event Director, TechCorp Inc.'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // In a real app, you would fetch the event details based on the route parameter
    this.route.params.subscribe(params => {
      // this.loadEventDetails(params['id']);
    });
  }
}