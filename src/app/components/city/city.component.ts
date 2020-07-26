import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/models/city.interface';
import { BaseComponent } from '../base/base.component';
import * as FavoritesActions from '../../state/favorites/favorites.actions';
import { eAppMode } from 'src/app/enums/app-mode.enum';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent extends BaseComponent<{ appMode: eAppMode }> implements OnInit {
  @Input() city: City;
  appMode$: Observable<eAppMode>;


  ngOnInit() {
    this.appMode$ = this.store.pipe(select('appMode'));

  }

  ngOnDestroy() {
  }
  deleteFavorite() {
    this.store.dispatch(FavoritesActions.DeleteFavorite({ cityKey: this.city.Key }));
  }

}
