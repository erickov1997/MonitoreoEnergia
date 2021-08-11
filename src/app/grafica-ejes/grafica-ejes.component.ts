import { Component, OnInit } from '@angular/core';
import { CustomSocketService } from '../custom-socket.service';
import * as moment from 'moment';



@Component({
  selector: 'app-grafica-ejes',
  templateUrl: './grafica-ejes.component.html',
  styleUrls: ['./grafica-ejes.component.css']
})
export class GraficaEjesComponent implements OnInit {
  multi: any[];
  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  single: any[any];

  legend2: boolean = false;
  view: [number, number] = [200, 300];

  colorScheme = {
    domain: ['#ff00ff', '#ffd60a','#ff0000']
  };

  cardColor: string = '#232837';

  constructor(private customSocket: CustomSocketService) { 
    this.view = [innerWidth / 3.5, 200];
    this.multi =[
      {
        "name": "ejex",
        "series":[]

        
      },
      {
        "name": "ejey",
        "series": [

        ]
      },
      {
        "name": "ejez",
        "series": [

        ]  
      }
    ]

    this.single=[
      {
        "name": "Eje x",
        "value": 0
      },
      {
        "name": "Eje y",
        "value": 0
      },
      {
        "name": "Eje z",
        "value": 0
      }
    ]
   
  }

  ngOnInit(): void {

    this.customSocket.getPrices$().subscribe(({ data }) => {

      const [ejex,ejey,ejez] = data;
      console.log("eje x",ejex.valor[0][1])

      const eje_x = this.parseDate(ejex.valor);

      const eje_y = this.parseDate(ejey.valor);

      const eje_z = this.parseDate(ejez.valor);
     
     const [ejexM, ejeyM,ejezM] = this.multi;

     //console.log(eje_x);

      this.multi[0].series = ejexM.series.concat(eje_x )

      this.multi[1].series = ejeyM.series.concat(eje_y)

      this.multi[2].series = ejezM.series.concat(eje_z)

      //console.log("multi: ", this.multi[0].series);
       
      this.multi = [...this.multi]

      this.single=[
        {
          "name": "Eje x",
          "value": ejex.valor[0][1]
        },
        {
          "name": "Eje y",
          "value": ejey.valor[0][1]
        },
        {
          "name": "Eje z",
          "value": ejez.valor[0][1]
        }
      ]

    })

  }

  parseDate(dataRaw: Array<any>): Array<any> {
    const result = dataRaw.map(([name, value], index) => { // TODO: 1919199119
      return {
        name: moment(name, 'x').toDate(),
        value
      }
    });

    return result
  }


  
  onSelect(data:any): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
  //  console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onResize(event:any) {
    this.view = [event.target.innerWidth /3, 200];
}

}
