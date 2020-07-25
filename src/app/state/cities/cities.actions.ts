import { createAction, props } from '@ngrx/store';
import { City } from 'src/app/models/city.interface';
import { CityWeather } from 'src/app/models/city-weather.interface';

export const getCities = createAction('[Home Component] GetCities', props<{ query: string }>());
export const SuccessGetCities = createAction('[Home Component] SuccessGetCities', props<{ payload: City[] }>());
export const ErrorCitiesAction = createAction('[City Component] ErrorCitiesAction', props<Error>());
export const getCity = createAction('[City Component] GetCity', props<{ payload: City }>());
export const SuccessGetCity = createAction('[City Component] SuccessGetCity', props<{ payload: City }>());
export const ErrorCityAction = createAction('[City Component] ErrorCityAction', props<Error>());
