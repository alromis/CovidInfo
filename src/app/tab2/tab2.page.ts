import { Component, OnInit} from '@angular/core';
import { DadesService } from '../services/dades.service';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  dades: Array<any> = [];
  loading = false;

  constructor(private api: DadesService, private navCtrl: NavController) {}

  ngOnInit(){
    this.api.dadesGlobals2().subscribe(
      (data: any) => {
      this.loading = false;
      if(data.Countries){
        for(let i = 0; i < data.Countries.length; i++){
          let c = {
            'nomPais': data.Countries[i].Country,
            'numCasos': data.Countries[i].TotalConfirmed,
            'numMorts': data.Countries[i].TotalDeaths,
            'numRecuperats': data.Countries[i].TotalRecovered,
          }
        this.dades.push(c);
        }
      }
      }
    );
  }





}
