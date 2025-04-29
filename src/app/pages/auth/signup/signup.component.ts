import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LoginComponent],
  templateUrl: './signup.component.html',
})
export class SignupComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  signupForm = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  isPhoneSignup = false;
  isLoading = false;
  errorMessage = '';
  showLoginPopup = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  toggleSignupMethod() {
    this.isPhoneSignup = !this.isPhoneSignup;
    this.errorMessage = '';
  }

  openLoginPopup() {
    this.showLoginPopup = true;
  }

  closeLoginPopup() {
    this.showLoginPopup = false;
  }

  async signupWithGoogle() {
    try {
      this.isLoading = true;
      this.errorMessage = '';
      await this.authService.loginWithGoogle();
      this.router.navigate(['/portfolio']);
    } catch (error) {
      this.errorMessage = 'Failed to sign up with Google. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  async signupWithEmail() {
    if (this.signupForm.password !== this.signupForm.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    try {
      this.isLoading = true;
      this.errorMessage = '';
      await this.authService.loginWithEmail(this.signupForm.email, this.signupForm.password);
      this.router.navigate(['/portfolio']);
    } catch (error) {
      this.errorMessage = 'Failed to sign up with email. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  async signupWithPhone() {
    try {
      this.isLoading = true;
      this.errorMessage = '';
      await this.authService.loginWithPhone(this.signupForm.phone);
      this.router.navigate(['/portfolio']);
    } catch (error) {
      this.errorMessage = 'Failed to sign up with phone. Please try again.';
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