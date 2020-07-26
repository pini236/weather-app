import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/models/city.interface';
import { BaseComponent } from '../base/base.component';
import * as FavoritesActions from '../../state/favorites/favorites.actions';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent extends BaseComponent<{}> implements OnInit {
  cityName: string;
  citesWeather: Object;
  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  @Input() city: City;


  ngOnInit() {
  }

  ngOnDestroy() {
  }
  deleteFavorite() {
    this.store.dispatch(FavoritesActions.DeleteFavorite({ cityKey: this.city.Key }));
  }

}
