import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  loginForm = {
    email: '',
    password: ''
  };

  isLoading = false;
  errorMessage = '';

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  async loginWithEmail() {
    try {
      this.isLoading = true;
      this.errorMessage = '';
      await this.authService.loginWithEmail(this.loginForm.email, this.loginForm.password);
      this.router.navigate(['/portfolio']);
    } catch (error) {
      this.errorMessage = 'Invalid email or password. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  async loginWithGoogle() {
    try {
      this.isLoading = true;
      this.errorMessage = '';
      await this.authService.loginWithGoogle();
      this.router.navigate(['/portfolio']);
    } catch (error) {
      this.errorMessage = 'Failed to login with Google. Please try again.';
    } finally {
      this.isLoading = false;
    }
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