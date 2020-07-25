import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { BaseComponent } from '../base/base.component';
import { City } from 'src/app/models/city.interface';
import { select } from '@ngrx/store';
import * as CitiesActions from '../../state/cities/cities.actions';
import * as DayWeatherActions from '../../state/days-weather/days-weather.actions';
@Component({
  selector: 'city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent extends BaseComponent<{ city: City, daysWeather: any }> implements OnInit {

  darkMode: boolean;
  city$: Observable<City>;
  daysWeather$: Observable<any>;
  state: string;
  temp: number;
  hum: number;
  wind: number;
  today: string;
  daysForecast: Object;
  cityIllustrationPath: string = '../../../assets/default.svg'
  sub1: Subscription;
  sub2: Subscription;
  errorMessage: string;
  tweets$: Observable<any>;

  ngOnInit() {
    this.city$ = this.store.pipe(select('city'));
    this.city$.subscribe((res) => {
      if (!res) {
        this.store.dispatch(CitiesActions.getCity({ payload: { locationKey: '215854', name: 'tel aviv' } }))
      }
    })
    this.daysWeather$ = this.store.pipe(select('daysWeather'));
    this.daysWeather$.subscribe((res) => {
      if (!res) {
        this.store.dispatch(DayWeatherActions.GetCityWeatherDays({ key: '215854' }));
      }
    })
    const todayNumberInWeek = new Date().getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.today = days[todayNumberInWeek];
  }

  ngOnDestroy() {
  }

}
