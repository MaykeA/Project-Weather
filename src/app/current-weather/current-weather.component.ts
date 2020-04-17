import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchWeatherService } from '../search-weather.service';
import { Model } from '../model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  formWeather: any;
  city: any;
  valor:string;

  infoApi: any;
  model: Model[]
  weatherData
  hora
  

  constructor(private weatherApi: SearchWeatherService) { }

  ngOnInit() {
    let data = new Date()
    this.hora = data.getTime()
    
    
    // this.weatherApi.getWeather(cidade, "São Paulo").subscribe((resposta) => {
    //   this.infoApi = resposta;
    //   let resp = this.infoApi.data[0];
    //   this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description, 
    //     resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    // })
  }

  saveValue(event){
    this.valor = String(event.target.value)
  }

  getCity(event) {
    this.weatherApi.getWeather(this.valor).subscribe((resposta) => {
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, 
        resp.rh, resp.sunrise, resp.sunset)
      console.log(this.weatherData)
      
      
    })
  }
}
