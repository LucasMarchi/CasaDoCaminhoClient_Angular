import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component'
import { VoluntariosComponent } from './voluntarios/voluntarios.component';
import { OktaAuthGuard } from '@okta/okta-angular/dist/okta/okta.guard';

const config = {
  issuer: 'https://dev-271925.oktapreview.com/oauth2/default',
  redirectUri: 'https://lucasmarchi.github.io/CasaDoCaminhoClient_Angular/implicit/callback',
  clientId: '0oae6xajeyTn2UEvu0h7'
};
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'voluntarios', component: VoluntariosComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(config)
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
