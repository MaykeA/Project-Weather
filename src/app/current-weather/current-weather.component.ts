import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchWeatherService } from '../search-weather.service';
import { GeolocationService } from '../geolocation.service';
import { Model } from '../model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  cityName: any
  valor: string;
  geo: any;

  weatherData
  infoApi: any;
  model: Model[]

  hora

  todayInfo
  todayApi

  constructor(private weatherApi: SearchWeatherService, private locale: GeolocationService) { }

  ngOnInit() {
    let data = new Date()
    this.hora = data.getTime()

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locale.geoLoc(position.coords.latitude, position.coords.longitude).subscribe((result) => {
          this.geo = result;
          let city = this.geo.results[0].address_components[3].long_name
          this.cityName = city
          this.getCity(event);
        })
      }, this.showError)
    }

  }

  // geoLocale() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.locale.geoLoc(position.coords.latitude, position.coords.longitude).subscribe((result) => {
  //         this.geo = result;
  //         let city = this.geo.results[0].address_components[3].long_name
  //         this.cityName = city
  //         this.getCity(event);
  //       })
  //     }, this.showError)
  //   }
  // }

  showError(error) {
    if (error.PERMISSION_DENIED) {
      alert('Usuário rejeitou a solicitação de Geolocalização')
      alert('Por favor insira um CEP ou nome de uma cidade')
    }
  }

  // saveValue(event){
  //   this.valor = event.target.value
  // }

  // getCity(event) {
  //   this.weatherApi.getWeather(this.cityName).subscribe((resposta) => {
  //     this.infoApi = resposta;
  //     let resp = this.infoApi.data[0];
  //     this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
      
  //   })
  // }


  saveValue(event) {
    this.cityName = event.target.value
  }

  getCity(event) {
    this.weatherApi.getWeather(this.cityName).subscribe((resposta) => {
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      console.log(resp);
      this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd,
      resp.rh, resp.sunrise, resp.sunset)
      console.log(this.weatherData)
    })
  }

}