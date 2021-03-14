import { CarListItem } from '../cars/car-list-item';

export interface Car extends CarListItem{
  color: string;
  year: number;
}
