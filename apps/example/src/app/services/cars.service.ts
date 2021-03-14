import { Injectable } from '@angular/core';
import { Car } from '../components/car/car';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarListItem } from '../components/cars/car-list-item';

@Injectable()
export class CarsService {
  private readonly data: Car[] = [
    {
      model: 'Focus',
      color: 'Black',
      brand: 'Ford',
      id: 1,
      year: 1987
    },
    {
      model: 'C Class',
      color: 'Green',
      brand: 'Mercedes',
      id: 2,
      year: 1987
    },
    {
      model: 'B-Class',
      color: 'White',
      brand: 'Mercedes',
      id: 3,
      year: 1987
    },
    {
      model: 'XC60',
      color: 'Cyan',
      brand: 'Volvo',
      id: 4,
      year: 1987
    },
    {
      model: 'X-Trail',
      color: 'Red',
      brand: 'Nissan',
      id: 5,
      year: 1987
    },
    {
      model: 'Leon',
      color: 'Blue',
      brand: 'Seat',
      id: 6,
      year: 1987
    },

    {
      model: 'Stonic',
      color: 'Brown',
      brand: 'Kia',
      id: 7,
      year: 1987
    },
    {
      model: 'Tundra',
      color: 'Yellow',
      brand: 'Toyota',
      id: 8,
      year: 1987
    },
    {
      model: 'ATS',
      color: 'Purple',
      brand: 'Cadillac',
      id: 9,
      year: 1987
    },
    {
      model: 'Elantra',
      color: 'Silver',
      brand: 'Hyundai',
      id: 10,
      year: 1987
    }
  ];

  getCar(id: number): Observable<Car> {
    return of(this.data.find(x => x.id === id));
  }

  getCars(): Observable<CarListItem[]> {
    return of(this.data).pipe(map((cars: Car[]) => cars.map(x => ({ id: x.id, model: x.model, brand: x.brand }))));
  }
}
