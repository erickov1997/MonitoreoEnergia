import { Component, OnInit } from '@angular/core';
import { TemperaturaService} from '../temperatura.service';

@Component({
  selector: 'app-temperatura-c',
  templateUrl: './temperatura-c.component.html',
  styleUrls: ['./temperatura-c.component.css']
})
export class TemperaturaCComponent implements OnInit {

  color:string ="";
  view: [number,number] = [450, 450];
  colorScheme = {
    domain: ['#ff0000','#5AA454']
  };
  min=0;
  value: number = 0;
  max=200;
  previousValue: number = 100;
  units: string = 'Temperatura';

  constructor(private customSocket: TemperaturaService) { }

  ngOnInit(): void {
    this.customSocket.getTemp$().subscribe(({ data })=>{
      const[temp]=data;
      this.value=temp.valor;
      //this.colorScheme.domain[0]='#5AA454';
     // console.log(this.colorScheme.domain[0]);
    })
  }

  onSelect(event:any) {
    console.log(event);
  }

}
