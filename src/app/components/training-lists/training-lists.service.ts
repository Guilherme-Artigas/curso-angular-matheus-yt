import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/interfaces/Car';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingListsService {
  private apiUrl = `${environment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) { }

  public getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  public handleDeleteCar(car: Car, cars: Car[]): Car[] {
    const newListCars: Car[] = cars.filter((c) => c.model !== car.model);

    return newListCars;
  }

  public delete(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.apiUrl}/${id}`);
  }
}
