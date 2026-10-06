import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

const comparators: Partial<Record<keyof Hero, (a: Hero, b: Hero) => number>> = {
  name: (a, b) => a.name.localeCompare(b.name),
  canFly: (a, b) => Number(a.canFly) - Number(b.canFly),
  color: (a, b) => a.color - b.color,
  creator: (a, b) => a.creator - b.creator,
};

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    if (!sortBy) return value;

    const compare = comparators[sortBy];
    return compare ? [...value].sort(compare) : value;
  }
}
