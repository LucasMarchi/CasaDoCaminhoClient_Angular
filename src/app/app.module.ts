import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './okta/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { VoluntariosComponent } from './voluntarios/voluntarios.component';
import { VoluntarioService } from './voluntario.service';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { VoluntarioCadastroComponent } from './voluntario-cadastro/voluntario-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    VoluntariosComponent,
    HomeComponent,
    MenuComponent,
    VoluntarioCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    VoluntarioService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
