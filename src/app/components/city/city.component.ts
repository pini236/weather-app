import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cityName: string;
  citesWeather: Object;
  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  @Input() set city(city: string) {
    this.cityName = city;

  }


  ngOnInit() {
  }

  ngOnDestroy() {
  }

  openDetails() {
  }
}
