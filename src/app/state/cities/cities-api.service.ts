import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../../models/city.interface';
import { apiEndpoints } from 'src/app/consts/weather-api-endpoints.const';
import { CityWeather } from 'src/app/models/city-weather.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesApiService {
  private apiKey = '0Y6FMASbFNJCjbGlk7pjLfunggL9ToHN';
  constructor(private httpclient: HttpClient) { }
  getCities(query: string): Observable<City[]> {
    return this.httpclient.get<City[]>(
      `${apiEndpoints.baseUrl.primaryEndpoint}/${apiEndpoints.cities.primaryEndpoint}/v1/${apiEndpoints.cities.secondaryEndpoint}/${apiEndpoints.cities.thirdEndpoint}?apikey=${this.apiKey}&q=${query}`);
  }
  getCity(Key: string): Observable<City> {
    return this.httpclient.get<City>(`${apiEndpoints.baseUrl.primaryEndpoint}/${apiEndpoints.cityWeather.primaryEndpoint}/v1/${Key}?apikey=${this.apiKey}`);
  }
}
