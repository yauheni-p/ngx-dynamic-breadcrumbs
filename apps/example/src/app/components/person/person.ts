import { PersonListItem } from '../people/person-list-item';

export interface Person extends PersonListItem {
  year: number;
  sex: string;
}
