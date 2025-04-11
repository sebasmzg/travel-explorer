import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Country} from '../../../models/country.model';

@Injectable({
  providedIn: 'root'
})

export class DestinationService {

  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient ) {}

  getDestinations(): Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrl)
  }

  getDestinationById(id:string): Observable<Country>{
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }
}
