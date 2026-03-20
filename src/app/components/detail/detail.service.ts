import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/interfaces/Car';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private apiUrl: string = `${environment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) { }

  public getOneCar(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.apiUrl}/${id}`);
  };
}
