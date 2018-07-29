import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

const countriesUrl = 'http://localhost:8081/countries'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  constructor(private http: HttpClient) { }

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(countriesUrl);
  }


}
