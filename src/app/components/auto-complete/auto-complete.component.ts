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
  cities$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
cityControl = new FormControl();
searchCities(keyword: string) {
  let url: string =
    'https://restcountries.eu/rest/v2/capital/' + keyword;
  if (keyword) {
    this.http.get(url).subscribe((res: Array<any>) => {
      this.cities$.next(res.map(c => c.capital));
    })
  } else {
  }
}
capitals = [];
selectedCity = '';
selectCity(city) {
  if (this.capitals.includes(city)) {
  } else if (city.leading > 0) {
  }
}



// myControl = new FormControl();
// options: string[] = ['One', 'Two', 'Three'];
// cities$: Observable<City[]>;
// query: string
ngOnInit(): void {
  this.cityControl.valueChanges.pipe(debounceTime(1000))
    .subscribe(newValue => {
      this.selectedCity = newValue
      this.searchCities(this.selectedCity)
    });
  // this.http.get('https://restcountries.eu/rest/v2/all').pipe((first())).subscribe((countries: Array<any>) => {
  //   countries.forEach((country: any) => {
  //     if (country.capital.length) {
  //       this.capitals.push(country.capital);
  //     }
  //   });
  //   this.capitals.sort();
  // });



  // this.filteredOptions = this.myControl.valueChanges
  //   .pipe(
  //     startWith(''),
  //     map(value => this._filter(value))
  //   );
  // this.cities$ = this.store.pipe(select('cities'));
}

  // searchCities() {
  //   this.store.dispatch(CitiesActions.getCities({ query: this.query }));
  // }




  // filteredOptions: Observable<string[]>;

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

}
