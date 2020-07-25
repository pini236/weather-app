import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent<T> implements OnInit {

  constructor(protected store: Store<T>) { }

  ngOnInit(): void {
  }

}
