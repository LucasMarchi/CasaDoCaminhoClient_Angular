import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { VoluntarioDetalheComponent } from './voluntario-detalhe/voluntario-detalhe.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { BeneficiariosComponent } from './beneficiarios/beneficiarios.component';
import { BeneficiarioService } from './beneficiarios.service';
import { BeneficiarioCadastroComponent } from './beneficiario-cadastro/beneficiario-cadastro.component';
import { BeneficiarioDetalheComponent } from './beneficiario-detalhe/beneficiario-detalhe.component';
import { DoadoresComponent } from './doadores/doadores.component';
import { DoadorDetalheComponent } from './doador-detalhe/doador-detalhe.component';
import { DoadorCadastroComponent } from './doador-cadastro/doador-cadastro.component';
import { DoadorService } from './doador.service';
import { ProjetoService } from './projeto.service';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';
import { ProjetoDetalheComponent } from './projeto-detalhe/projeto-detalhe.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { BeneficiarioPerfilComponent } from './beneficiario-perfil/beneficiario-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    VoluntariosComponent,
    HomeComponent,
    MenuComponent,
    VoluntarioCadastroComponent,
    VoluntarioDetalheComponent,
    SidenavMenuComponent,
    BeneficiariosComponent,
    BeneficiarioCadastroComponent,
    BeneficiarioDetalheComponent,
    DoadoresComponent,
    DoadorDetalheComponent,
    DoadorCadastroComponent,
    ProjetoCadastroComponent,
    ProjetoDetalheComponent,
    ProjetosComponent,
    BeneficiarioPerfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    VoluntarioService,
    BeneficiarioService,
    DoadorService,
    ProjetoService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
