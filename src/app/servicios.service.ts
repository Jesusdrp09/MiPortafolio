import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }
  background:string = "./../assets/img/background.jpg"
  opciones:string[] = ['about me', 'skills', 'experienced', 'contact']
  elegida:string = ""

  cambiar(){
    this.background = "./../assets/img/background2.png"
  }

  get(){
    return this.background;
  }

  cambiarMenu(eleccion: string){
    this.elegida = eleccion;
  }

  getOpciones(){
    var aux:string[] = []
    this.opciones.forEach((val) =>{
      if(val != this.elegida){
        aux.push(val);
      }
    })
    return aux;
  }

}
