import { createReducer, on } from '@ngrx/store';
import { activeLightMode, activeDarkMode } from './layout.actions';
import { eAppMode } from 'src/app/enums/app-mode.enum';

export const initialLayoutState = eAppMode.light;

const _layoutReducer = createReducer(initialLayoutState,
  on(activeLightMode, layout => layout = eAppMode.light),
  on(activeDarkMode, layout => layout = eAppMode.dark),
);

export function layoutReducer(layout, action) {
  return _layoutReducer(layout, action);
}