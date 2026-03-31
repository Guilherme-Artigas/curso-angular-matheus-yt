import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from 'src/app/interfaces/Moment';
import { Response } from 'src/app/interfaces/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private readonly apiUrl: string = `${environment.apiUrl}/api/moments`;

  constructor(private readonly httpClient: HttpClient) { }

  public getOne(id: number): Observable<Response<Moment>> {
    return this.httpClient.get<Response<Moment>>(`${this.apiUrl}/${id}`);
  }
}
