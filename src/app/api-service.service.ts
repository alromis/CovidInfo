import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) {}
  getCountriesRegion(cocktail:string){

    const apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+cocktail;
    
    return this.http.get(apiURL);
  }
  getCountriesBloc(region:string){

    const apiURL = 'https://restcountries.eu/rest/v2/regionalbloc/'+region;

    return this.http.get(apiURL);
  }

}