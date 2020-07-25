import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CitiesActions from './cities.actions';
import { CitiesApiService } from './cities-api.service';
import { City } from '../../models/city.interface';
import { CityWeather } from 'src/app/models/city-weather.interface';

@Injectable()
export class CitiesEffects {
  constructor(private citiesService: CitiesApiService, private action$: Actions) { }

  GetCities$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CitiesActions.getCities),
      mergeMap(action =>
        this.citiesService.getCities(action.query).pipe(
          map((data: City[]) => {
            return CitiesActions.SuccessGetCities({ payload: data });
          }),
          catchError((error: Error) => {
            return of(CitiesActions.ErrorCitiesAction(error));
          })
        )
      )
    )
  );
  GetCity$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CitiesActions.getCity),
      mergeMap(action =>
        this.citiesService.getCity(action.payload.locationKey).pipe(
          map((data: City) => {
            return CitiesActions.SuccessGetCity({ payload: data });
          }),
          catchError((error: Error) => {
            return of(CitiesActions.ErrorCityAction(error));
          })
        )
      )
    )
  );
}
