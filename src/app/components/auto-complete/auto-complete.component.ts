import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { startWith, map, first } from 'rxjs/operators';
import { City } from 'src/app/models/city.interface';
import { BaseComponent } from '../base/base.component';
import { select } from '@ngrx/store';
import * as CitiesActions from '../../state/cities/cities.actions';
@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent extends BaseComponent<{ cities: City[] }> implements OnInit {
  cities$: Observable<City[]> = this.store.pipe(select('cities'));
  cityControl = new FormControl();
  searchCities(keyword: string) {
    if (keyword)
      this.store.dispatch(CitiesActions.getCities({ query: keyword }));

  }
  capitals = [];
  selectedCity = '';
  selectCity(city) {
    this.store.dispatch(CitiesActions.getCity({ payload: city }));
  }



  ngOnInit(): void {
    this.cityControl.valueChanges.pipe(debounceTime(1000))
      .subscribe(newValue => {
        this.selectedCity = newValue
        this.searchCities(this.selectedCity)
      });
  }

  // searchCities() {
  //   this.store.dispatch(CitiesActions.getCities({ query: this.query }));
  // }
}
