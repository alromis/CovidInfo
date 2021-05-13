import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  esp: Array<any> = [];
  loading = false;

  

  constructor(private api: DadesService) {}



  ngOnInit(){
    this.api.dadesEspanya().subscribe(
      (data: Array<any>) => {
      this.loading = false;
      for(let i = 0; i < data.length; i++){
        let c = {
          'numCasos': data[i].Confirmed,
          'data': data[i].Date.slice(0, -10),
          'numMorts': data[i].Deaths,
          'numRecuperats': data[i].Recovered,
        }
      this.esp.push(c);
      }
      }
    );


    
    
  

  



}}
