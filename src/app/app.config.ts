import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AnimationService } from './services/animation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    AnimationService
  ]
};
