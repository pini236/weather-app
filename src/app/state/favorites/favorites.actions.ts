import { createAction, props } from '@ngrx/store';
import { City } from 'src/app/models/city.interface';

export const GetFavorites = createAction('[Favorites Component] GetFavorites');
export const AddFavorite = createAction('[Favorites Component] AddFavorite', props<{ payload: City }>());
export const DeleteFavorite = createAction('[Favorites Component] DeleteFavorite', props<{ cityKey: string }>());
