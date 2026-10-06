import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes.data';
import {
  CanFlyPipe,
  HeroColorPipe,
  HeroCreatorPipe,
  HeroSortByPipe,
  HeroTextColorPipe,
  ToggleCasePipe,
} from '../../pipes';
import { TitleCasePipe } from '@angular/common';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
  ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
  name = signal('Moises Velasquez');

  uppercase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);
}
