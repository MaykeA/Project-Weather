import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private geoLocation: HttpClient) { }
  private baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
  private key = 'AIzaSyB-n3yfcG8H5sFE3yS1QcoMHmFy1ttpn50'

  geoLoc(latitude, longitude) {
    return this.geoLocation.get(this.baseUrl + `${latitude},${longitude}&location_type=ROOFTOP&result_type=street_address&plus_code&key=${this.key}`)
  }
}
