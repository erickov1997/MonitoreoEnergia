import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VariadorServiceService {
  
  constructor(private socket: Socket) { }

  public getDataVariador$(): Observable<any>{
    return new Observable(observer => {
      try {

        this.socket.on('connect', () => { 
          console.log('Conectado!');
        })

        this.socket.on('variador', (data:number) => { //TODO Nuestro evento!!
          console.log('Llego data variador :)');
          console.log(data)
          observer.next(data)
        })

        this.socket.on('disconnect', () => { //TODO Nativo!
          observer.complete()
        })

        this.socket.on('error', (e:any) => { //TODO Nativo!
          observer.error(e)
        })


        this.socket.on('connect_error', (e:any) => { //TODO Nativo!
          observer.error(e)
        })


      } catch (e:any) {
        observer.error(e);
      }
    })
  }

  }

