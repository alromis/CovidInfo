import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DadesService {

  constructor(private http: HttpClient) { }

  dadesEspanya(){
    const apiURL = "https://api.covid19api.com/country/Spain";
    return this.http.get(apiURL);
  }
  dadesGlobals2(){
    const apiURL = "https://api.covid19api.com/summary";
    return this.http.get(apiURL);
  }
  
  
  dadesGlobals(){
    const apiURL = "https://api.covid19api.com/world/total";
    return this.http.get(apiURL);
  }
}
