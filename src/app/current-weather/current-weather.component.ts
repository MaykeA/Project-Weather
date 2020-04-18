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
  cityName: any
  valor: string;
  geo: any;

  weatherData
  infoApi: any;
  model: Model[]

  hora

  constructor(private weatherApi: SearchWeatherService, private locale: GeolocationService) { }

  ngOnInit() {
    let data = new Date()
    this.hora = data.getTime()

    /*if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        //Recebe a localização do objeto usando o getCurrentPosition //
        this.locale.geoLoc(position.coords.latitude, position.coords.longitude).subscribe((result) => {
          //Usando subscribe para retornar o objeto usando as coordenadas retornadas do objeto position //
          this.geo = result;
          this.city = this.geo.results[0].address_components[3].long_name
          //retornando nome da cidade de acordo com o array do obj
          this.cityName = this.city
          console.log(this.cityName)

          this.weatherApi.getWeather(this.cityName).subscribe((resposta) => {
            this.infoApi = resposta;
            let resp = this.infoApi.data[0];
            this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description,
              resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
            console.log(resp.city_name)
          })
        })
      }, this.showError)
    }*/
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('Usuário rejeitou a solicitação de Geolocalização')
        alert('Por favor insira um CEP ou nome de uma cidade')
        break;
    }
  }

  saveValue(event) {
    this.valor = event.target.value
  }

  getCity(event) {
    this.weatherApi.getWeather(this.valor).subscribe((resposta) => {
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      console.log(resp);
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


