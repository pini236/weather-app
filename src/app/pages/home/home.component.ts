import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { City } from 'src/app/models/city.interface';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import * as CitiesActions from '../../state/cities/cities.actions';
import { CityWeather } from 'src/app/models/city-weather.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent<{ cities: City[] }> implements OnInit {
  cities$: Observable<City[]>;
  query: string
  ngOnInit(): void {
    this.cities$ = this.store.pipe(select('cities'));
  }

  searchCities() {
    this.store.dispatch(CitiesActions.getCities({ query: this.query }));
  }
}
