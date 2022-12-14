import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Streaming } from '../model/streamingmodel';

@Injectable({
  providedIn: 'root',
})
export class StreamingService {
  BASEURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  streamingsave(streaming: Streaming): Observable<Streaming> {
    return this.http.post<Streaming>(`${this.BASEURL}streaming`, streaming, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getstreaming(): Observable<Streaming[]> {
    return this.http.get<Streaming[]>(`${this.BASEURL}streaming`);
  }

  deletestreaming(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASEURL}streaming/${id}`);
  }
}
