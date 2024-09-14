import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.page').then((m) => m.PricingPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.page').then((m) => m.ContactPage),
  },
  {
    path: '**',
    redirectTo: () => {
      return 'about';
    },
  },
];
