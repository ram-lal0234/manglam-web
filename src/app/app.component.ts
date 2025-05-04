import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsAppComponent } from './components/whatsapp/whatsapp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, NavbarComponent, WhatsAppComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'manglam-website';

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.initializeAnimations();
  }

  private initializeAnimations() {
    this.animationService.initScrollReveal();
    this.animationService.initParallax();
    this.animationService.initStickyHeader();
    this.animationService.initHoverEffects();
  }
}
