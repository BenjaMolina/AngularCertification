import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { WeatherResponse } from '../interfaces/weather-response.interface';
import { CurrentWeather } from '../interfaces/current-weather.interface';
import { ForecastResponse } from '../interfaces/forecast-response.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl: string = environment.baseURL;
  private key:string = environment.openWeatherApiKey

  private _history: CurrentWeather[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) { 
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
  }

  getWeatherZipCode(zipcode:number):Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${ this.baseUrl }/weather?zip=${zipcode},us&units=metric&appid=${this.key}`)
  }

  getForcastZipCode(zipcode:number){
    return this.http.get<ForecastResponse>(`${ this.baseUrl }/forecast/daily?zip=${zipcode},us&units=metric&cnt=5&appid=${this.key}`)
  }

  addHistory(currentWeather:CurrentWeather):void {
    const existWeather = this._history.find(weather => weather.zip === currentWeather.zip)
    if( !existWeather ) {
      this._history.unshift( currentWeather );
    }

    this.saveOnStorage();
  }

  removeCurrentWeather(currentWeather:CurrentWeather):void {
    this._history = this._history.filter(weather => weather.zip !== currentWeather.zip)
    this.saveOnStorage();
  }

  saveOnStorage():void {
    localStorage.setItem('history', JSON.stringify( this._history )  );
  }

}
