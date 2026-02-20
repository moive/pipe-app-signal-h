import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'John Doe',
  gender: 'male',
  age: 30,
  address: '123 Main St, Anytown, USA',
};

const client2 = {
  name: 'Jane Smith',
  gender: 'female',
  age: 25,
  address: '456 Oak Ave, Somewhere, USA',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {
  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  greetingMap = {
    male: 'Estimado',
    female: 'Estimada',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
}
