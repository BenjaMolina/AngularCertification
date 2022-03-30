import { CurrentWeather } from "./current-weather.interface";

export interface Forecast {
    name: string,
    zip: string,
    data: CurrentWeather[]
}
