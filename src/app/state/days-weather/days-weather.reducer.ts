import { createReducer, on } from '@ngrx/store';
import { GetCityWeatherDays, SuccessGetWeatherDays, ErrorWeatherDaysAction } from './days-weather.actions';

export const initialDaysWeatherState: any = null;

const _daysWeatherReducer = createReducer(initialDaysWeatherState,
  on(GetCityWeatherDays, days => days = days),
  on(SuccessGetWeatherDays, (days: any, { payload }) => {
    return payload
  }),
  on(ErrorWeatherDaysAction, (days: any, error: Error) => {
    console.error(error);
    return { ...days, ToDoError: error };
  }),

);

export function daysWeatherReducer(days, action) {
  return _daysWeatherReducer(days, action);
}
