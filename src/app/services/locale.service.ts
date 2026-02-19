import { Injectable, signal } from '@angular/core';

export type Ilocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<Ilocale>('es');

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as Ilocale) ?? 'es');
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: Ilocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    location.reload();
  }
}
