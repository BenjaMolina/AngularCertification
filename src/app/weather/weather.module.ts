import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { ListWeatherComponent } from './pages/list-weather/list-weather.component';
import { ZipCodeComponent } from './components/zip-code/zip-code.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ForecastDayComponent } from './components/forecast-day/forecast-day.component';
import { ErrorResponseComponent } from './components/error-response/error-response.component';


@NgModule({
  declarations: [
    HomeComponent,
    ForecastComponent,
    ListWeatherComponent,
    ZipCodeComponent,
    CurrentWeatherComponent,
    ImagenPipe,
    ForecastDayComponent,
    ErrorResponseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
