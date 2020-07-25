import { createReducer, on } from '@ngrx/store';
import { getCities, SuccessGetCities, ErrorCitiesAction, getCity, SuccessGetCity, ErrorCityAction } from './cities.actions';
import { City } from 'src/app/models/city.interface';
import { CityWeather } from 'src/app/models/city-weather.interface';

export const initialCitiesState: City[] = [];

const _citiesReducer = createReducer(initialCitiesState,
  on(getCities, cities => cities = cities),
  on(SuccessGetCities, (cities: City[], { payload }) => {
    return payload
  }),
  on(ErrorCitiesAction, (cities: City[], error: Error) => {
    console.error(error);
    return { ...cities, ToDoError: error };
  }),

);
export const initialCityState: CityWeather = null;

const _cityReducer = createReducer(initialCityState,
  on(getCity, (city: City, { payload }) => {
    return { ...payload };
  }),
  on(SuccessGetCity, (city: City, { payload }) => {
    return { ...city, ...payload[0] }
  }),
  on(ErrorCityAction, (error) => error)
);

export function citiesReducer(cities, action) {
  return _citiesReducer(cities, action);
}
export function cityReducer(city, action) {
  return _cityReducer(city, action);
}
