import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { CurrentWeather } from '../../interfaces/current-weather.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  get history() {
    return this.weatherService.history;
  }

  ngOnInit(): void {
  }

  removeWeather(weather:CurrentWeather){
    this.weatherService.removeCurrentWeather(weather)
  }

}
