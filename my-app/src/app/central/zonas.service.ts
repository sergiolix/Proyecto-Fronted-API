import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zonas } from './zonas';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {
  private url: string = "http://localhost:8080/zonas_deforestadas";
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Zonas[]> {
    return this.http.get<Zonas[]>(this.url);
  }
  create(Zonas:Zonas): Observable<Zonas> {
     return this.http.post<Zonas>(this.url, Zonas);
  }

  get(id:number):Observable<Zonas>{
    return this.http.get<Zonas>(this.url+'/'+id);
  }
}
