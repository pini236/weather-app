import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent<T> implements OnInit {

  constructor(protected store: Store<T>,public http: HttpClient) { }

  ngOnInit(): void {
  }

}
