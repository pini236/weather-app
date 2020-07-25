import { createAction, props } from '@ngrx/store';
import { City } from 'src/app/models/city.interface';
import { CityWeather } from 'src/app/models/city-weather.interface';

export const GetCityWeatherDays = createAction('[DaysContainer Component] GetCityWeatherDays', props<{ key: string }>());
export const SuccessGetWeatherDays = createAction('[DaysContainer Component] SuccessGetWeatherDays', props<{ payload: any }>());
export const ErrorWeatherDaysAction = createAction('[DaysContainer Component] ErrorWeatherDaysAction', props<Error>());
