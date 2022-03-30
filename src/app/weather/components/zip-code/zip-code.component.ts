import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CurrentWeather } from '../../interfaces/current-weather.interface';
import { zip } from 'rxjs';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.css']
})
export class ZipCodeComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    zipcode: [ , [Validators.required, Validators.minLength(3),Validators.min(0)] ]
  })

  errorMessage:string = ""

  constructor( private fb: FormBuilder,
                private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

  validInput( input: string ) {

    return this.miFormulario.controls[input].errors 
            && this.miFormulario.controls[input].touched;
  }

  onSubmit():void {
    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    const zipcode:number = this.miFormulario.value.zipcode
    this.weatherService.getWeatherZipCode(zipcode)
        .subscribe({
          next: (weather) => {

            const currentWeather:CurrentWeather = {
              name:           weather.name,
              zip:            zipcode,
              conditions:     weather.weather[0].main,
              temp:           weather.main.temp,
              tempMax:        weather.main.temp_max,
              tempMin:        weather.main.temp_min,
              date:           new Date()
            }
  
            this.weatherService.addHistory(currentWeather)
            
            this.errorMessage = ""
            this.miFormulario.reset();
  
          },          
          error: (error:HttpErrorResponse)=> {
            this.errorMessage = error.error.message;
          }
        })

    
  }

}
