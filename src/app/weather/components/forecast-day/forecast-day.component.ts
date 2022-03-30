import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../../interfaces/current-weather.interface';

@Component({
  selector: 'app-forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.css']
})
export class ForecastDayComponent implements OnInit {
  @Input() forecasts: CurrentWeather[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
