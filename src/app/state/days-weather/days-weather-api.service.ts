import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../../models/city.interface';
import { apiEndpoints } from 'src/app/consts/weather-api-endpoints.const';
import { CityWeather } from 'src/app/models/city-weather.interface';

@Injectable({
  providedIn: 'root'
})
export class DaysWeatherService {
  private apiKey = '3GomDBNeuUGbaYW3h5zGL24NKmdImjSw';
  constructor(private httpclient: HttpClient) { }
  getCityWeatherDays(key: string): Observable<any[]> {
    return this.httpclient.get<any[]>(
      `${apiEndpoints.baseUrl.primaryEndpoint}/${apiEndpoints.daysWeather.primaryEndpoint}/v1/${apiEndpoints.daysWeather.secondaryEndpoint}/${apiEndpoints.daysWeather.thirdEndpoint}/${key}?apikey=${this.apiKey}&metric=true`);
  }
}
