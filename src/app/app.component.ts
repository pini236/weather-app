import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { eAppMode } from './enums/app-mode.enum';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LayoutActions from './state/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent<{ appMode: eAppMode }> implements OnInit {
  appMode$: Observable<eAppMode>;
  currentAppMode: eAppMode;
  ngOnInit() {
    this.appMode$ = this.store.pipe(select('appMode'));
    this.appMode$.subscribe((res) => {
      this.currentAppMode = res;
    })
  }
  modeToggleSwitch() {
    switch (this.currentAppMode) {
      case eAppMode.dark:
        this.store.dispatch(LayoutActions.activeLightMode())
        break;
      case eAppMode.light:
        this.store.dispatch(LayoutActions.activeDarkMode())
        break;
      default:
        this.store.dispatch(LayoutActions.activeDarkMode())
        break;
    }
  }
}
