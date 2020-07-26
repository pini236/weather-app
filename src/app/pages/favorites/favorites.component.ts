import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { City } from 'src/app/models/city.interface';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import * as FavoritesActions from '../../state/favorites/favorites.actions';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent extends BaseComponent<{ favorites: City[] }> implements OnInit {
  favorite$: Observable<City[]>;


  ngOnInit(): void {
    this.favorite$ = this.store.pipe(select('favorites'));
    this.store.dispatch(FavoritesActions.GetFavorites());
  }


}
