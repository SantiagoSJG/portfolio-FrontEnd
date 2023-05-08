import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillService } from './skill.service';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModalComponent } from './header/header-modal/header-modal.component';
import { MainComponent } from './main/main.component';
import { RestService } from './rest.service';

import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    HeaderComponent,
    HeaderModalComponent,
    MainComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SkillService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
