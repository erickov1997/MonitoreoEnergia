import { Component, OnInit } from '@angular/core';
import { VariadorServiceService } from '../variador-service.service';
import * as moment from 'moment';
import { single } from './data';


@Component({
  selector: 'app-variador',
  templateUrl: './variador.component.html',
  styleUrls: ['./variador.component.css']
})
export class VariadorComponent implements OnInit {


  //export class VariadorComponent  {
  // single: any[any];
  //single: any[];
  legend: boolean = false;
  animations: boolean = true;
  view: [number, number] = [700, 600];

  fase1: number = 0;
  single2: any[any];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  cardColor: string = '#232837';

  constructor(private customVariadrSocket: VariadorServiceService) {
    //Object.assign(this.single2);

    this.single2 = [
      {
        "name": "Fase 1A",
        "value": 0
      },
      {
        "name": "Fase 2A",
        "value":0
      },
      {
        "name": "Fase 3A",
        "value": 0
      },
      {
        "name": "volts L1-L2",
        "value": 0
      },
      {
        "name": "volts L2-L3",
        "value": 0
      },
      {
        "name": "Hz",
        "value": 0
      }
    ]
  }

  ngOnInit(): void {
    this.customVariadrSocket.getDataVariador$().subscribe(({ data }) => {
      const [dataFase1A, dataFase2A, dataFase3A, DataL1, DataL2, DataL3, DataHZ] = data;
      this.fase1 = dataFase1A.valor1;
      console.log('fase1: ', this.fase1);

      this.single2 = [
        {
          "name": "Fase 1A",
          "value": dataFase1A.valor1/10
        },
        {
          "name": "Fase 2A",
          "value": dataFase1A.valor2/10
        },
        {
          "name": "Fase 3A",
          "value": dataFase1A.valor3/10
        },
        {
          "name": "volts L1-L2",
          "value": dataFase1A.valor4/10
        },
        {
          "name": "volts L2-L3",
          "value": dataFase1A.valor5/10
        },
        {
          "name": "Hz",
          "value": dataFase1A.valor7/10
        }
        
      ]


    })
  }

  /*onSelect(event:any) {
    console.log(event);
  }*/

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    // data.value=  this.fase1;
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));

  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));

  }
}
