import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from 'src/app/interfaces/Moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewMomentService {
  private readonly url: string = `${environment.apiUrl}/api/moments`;

  constructor(private readonly httpClient: HttpClient) { }

  public createMoment(moment: FormData): Observable<Moment> {
    return this.httpClient.post<Moment>(this.url, moment);
  }
}
