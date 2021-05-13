import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  dades: Array<any> = [];
  loading = false;

  constructor(private api: DadesService) {}

  ngOnInit(){

    this.api.dadesGlobals().subscribe(
      (data: any) => {
      this.loading = false;
      this.dades = [data.TotalConfirmed, data.TotalDeaths, data.TotalRecovered]
        
      
      }
    );
  }

}
