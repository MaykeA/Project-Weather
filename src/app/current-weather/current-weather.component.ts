import { Component, OnInit } from '@angular/core';
import { SearchWeatherService } from '../search-weather.service';
import { GeolocationService } from '../geolocation.service';
import { Model } from '../model';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  city: any;
  valor: string;

  infoApi: any;

  geo: any;
  model: Model[]
  weatherData
  hora
  key = ''
  constructor(private weatherApi: SearchWeatherService, private locale: GeolocationService) { }

  ngOnInit() {
    let data = new Date()
    this.hora = data.getTime()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        //Recebe a localização do objeto usando o getCurrentPosition //
        this.locale.geoLoc(position.coords.latitude, position.coords.longitude).subscribe((result) => {
          //Usando subscribe para retornar o objeto usando as coordenadas retornadas do objeto position //
          this.geo = result;
          let cityName = this.geo.results[0].address_components[3].long_name
          this.city = cityName
          //retornando nome da cidade de acordo com o array do obj
        })
      })
    }
    console.log(this.geo.results[0].address_components[3].long_name);
    console.log(this.valor);
  }

  saveValue(event) {
    this.valor = event.target.value
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

// this.weatherApi.getWeather(cidade, "São Paulo").subscribe((resposta) => {
    //   this.infoApi = resposta;
    //   let resp = this.infoApi.data[0];
    //   this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description, 
    //     resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    // })
