import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/Comment';
import { Moment } from 'src/app/interfaces/Moment';
import { Response } from 'src/app/interfaces/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private readonly apiUrl: string = `${environment.apiUrl}/api/moments`;
  private readonly apiUrlComment: string = `${environment.apiUrl}/api/moments`;

  constructor(private readonly httpClient: HttpClient) { }

  public newComment(data: Comment): Observable<Response<Comment>> {
    const url: string = `${this.apiUrlComment}/${data.momentId}/comments`;
    return this.httpClient.post<Response<Comment>>(url, data);
  }

  public getOne(id: number): Observable<Response<Moment>> {
    return this.httpClient.get<Response<Moment>>(`${this.apiUrl}/${id}`);
  }

  public delete(id: number): Observable<Response<Moment>> {
    return this.httpClient.delete<Response<Moment>>(`${this.apiUrl}/${id}`);
  }
}
