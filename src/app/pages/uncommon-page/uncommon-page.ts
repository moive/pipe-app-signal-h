import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe],
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

  // i18n  Plural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Luis',
    'Ana',
    'Sofia',
    'Carlos',
    'Lucia',
    'Miguel',
    'Laura',
    'Jorge',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
}
