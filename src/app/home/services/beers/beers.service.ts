import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBeer } from '../../interfaces/beer.interface';
import { environment } from '@environments/environment';
import { API_URLS } from '@shared/api.constants';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Array<IBeer>> {
    const apiBeers: string = `${environment.apiUrl}` + API_URLS.GET_BEERS;
    return this.http.get<Array<IBeer>>(apiBeers);
  }
}