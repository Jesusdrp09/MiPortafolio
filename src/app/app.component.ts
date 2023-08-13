import { Component } from '@angular/core';
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPortafolio';
  width = screen.availWidth*0.998;
  height = screen.availHeight*0.859;

  constructor(public servicios: ServiciosService) {}

  estilos(){
    var url = this.servicios.get();
    return {'background-image': 'url('+url+')',
    'width': this.width.valueOf().toString()+'px', 
    'height': this.height.valueOf().toString()+'px',
    'background-size': '100% 100%'}
  }
}
