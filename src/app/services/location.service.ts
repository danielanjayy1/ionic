import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}
  getLocation(): Promise<any> {
    return Geolocation.getCurrentPosition();
  }
}
