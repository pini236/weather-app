import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as DaysWeatherActions from './days-weather.actions';
import { DaysWeatherService } from './days-weather-api.service';

@Injectable()
export class DaysWeatherEffects {
  constructor(private daysWeatherService: DaysWeatherService, private action$: Actions) { }

  GetCityWeatherDays$: Observable<Action> = createEffect(() =>
    this.action$.pipe(ofType(DaysWeatherActions.GetCityWeatherDays),
      mergeMap(action =>
        this.daysWeatherService.getCityWeatherDays(action.key).pipe(
          map((data: any) => {
            return DaysWeatherActions.SuccessGetWeatherDays({ payload: data });
          }),
          catchError((error: Error) => {
            return of(DaysWeatherActions.ErrorWeatherDaysAction(error));
          })
        )
      )
    )
  )
}
