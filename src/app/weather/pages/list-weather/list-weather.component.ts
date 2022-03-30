import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-list-weather',
  templateUrl: './list-weather.component.html',
  styles: [
  ]
})
export class ListWeatherComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    
  }

}
