import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public oktaAuthService: OktaAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.oktaAuthService.getAccessToken().accessToken}`
      }
    });

    return next.handle(request);
  }
}