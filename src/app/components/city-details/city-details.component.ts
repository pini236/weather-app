import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { BaseComponent } from '../base/base.component';
import { City } from 'src/app/models/city.interface';
import { select } from '@ngrx/store';
import * as CitiesActions from '../../state/cities/cities.actions';
import * as FavoritesActions from '../../state/favorites/favorites.actions';
import * as DayWeatherActions from '../../state/days-weather/days-weather.actions';
import * as _ from 'lodash';
@Component({
  selector: 'city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent extends BaseComponent<{ city: City, daysWeather: any, favorites: City[] }> implements OnInit {

  darkMode: boolean;
  city$: Observable<City>;
  favorites: City[];
  selectedCity: City;
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
    this.store.pipe(select('favorites')).subscribe((res) => {
      this.favorites = res;
    });
    this.city$.subscribe((res) => {
      if (!res) {
        this.store.dispatch(CitiesActions.getCity({ payload: { Key: '215854', LocalizedName: 'tel aviv' } }))
      } else {
        this.selectedCity = res;
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
  isFavoriteCity(): boolean {
    return _.find(this.favorites, { Key: this.selectedCity.Key });
  }
  addFavorite() {
    this.store.dispatch(FavoritesActions.AddFavorite({ payload: this.selectedCity }))
  }
  deleteFavorite() {
    this.store.dispatch(FavoritesActions.DeleteFavorite({ cityKey: this.selectedCity.Key }))
  }

  ngOnDestroy() {
  }

}
