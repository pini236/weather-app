import { createReducer, on } from '@ngrx/store';
import { GetFavorites, AddFavorite, DeleteFavorite } from './favorites.actions';
import { City } from 'src/app/models/city.interface';
import * as _ from 'lodash';

export const initialFavoritesState: City[] = [{ name: 'tel aviv', locationKey: '12345', Temperature: { Metric: 33 }, WeatherText: 'Hot' }];

const _favoritesReducer = createReducer(initialFavoritesState,
  on(GetFavorites, (favorites: City[]) => {
    return favorites;
  }),
  on(AddFavorite, (favorites: City[], { payload }) => {
    return [...favorites, payload];
  }),
  on(DeleteFavorite, (favorites: City[], { cityKey }) => {
    return _.filter(favorites, (f: City) => f.locationKey != cityKey)
  })
);


export function favoritesReducer(favorites, action) {
  return _favoritesReducer(favorites, action);
}

