import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe, HeroColorPipe, ToggleCasePipe } from '../../pipes';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
  name = signal('Moises Velasquez');

  uppercase = signal(true);

  heroes = signal(heroes);
}
