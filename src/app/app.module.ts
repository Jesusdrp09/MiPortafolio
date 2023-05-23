import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosService } from './servicios.service';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencedComponent } from './experienced/experienced.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'about me', 
    component: AboutMeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'experienced',
    component: ExperiencedComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperiencedComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public servicios: ServiciosService) {}

  cambiar(){
    this.servicios.cambiar();
  }
}
