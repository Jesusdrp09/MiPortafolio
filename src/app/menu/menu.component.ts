import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  menuOn:boolean = false;
  opciones:string[] = [];
  elegida:string = ''
  constructor(public servicios: ServiciosService, private router: Router) {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
          //this.currentRoute = event.url;
          if(event.url != '/'){
            var url = event.url.replace("/", "");
            url = url.replace("%20", " ");
            this.menuOut(url);
          }else{
            this.menuOn = false;
          }
      }


  });
  }


  menuOut(seccion:string){
    this.menuOn = true;
    this.servicios.cambiar();
    this.seccion(seccion);
  }

  seccion(seccion:string){
    this.servicios.cambiarMenu(seccion)
    this.elegida = seccion
    this.opciones = this.servicios.getOpciones()
  }
}
