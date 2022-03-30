import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Forecast } from '../../interfaces/forecast.interface';
import { CurrentWeather } from '../../interfaces/current-weather.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styles: [
  ]
})
export class ForecastComponent implements OnInit {

  forecast!: Forecast;
  zipcode:  string;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ zipcode }) => {
          this.zipcode = zipcode
          return this.weatherService.getForcastZipCode(zipcode)
        } )
      )
      .subscribe( {
        next: (data) => {
          
          this.forecast = {
            name: data.city.name,
            zip: this.zipcode,
            data: []
          }
          
          for (let day of data.list) {
            const weatherData:CurrentWeather = {
              name:       data.city.name,
              zip:        Number(this.zipcode),
              conditions: day.weather[0].main,
              temp:       day.temp.day,
              tempMax:    day.temp.max,
              tempMin:    day.temp.min,
              date:       new Date(day.dt * 1000)
            }

            this.forecast.data.push(weatherData)            
          }

          console.log(this.forecast)
        },
        error: (error:HttpErrorResponse) => {
          this.errorMessage = error.error.message;
        }
      } );
  }

  back() {
    this.router.navigate(['/weather/list']);
  }

}
