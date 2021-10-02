import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class HttpInterceptorService {

  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let autRequest = req;

    return next.handle(this.addToken(req));

  }

  addToken(req: HttpRequest<any>): HttpRequest<any> {
    const accessToken =localStorage.getItem('token');
    console.log('addToken'+accessToken);
    if (accessToken) {
      return req.clone({
          setHeaders:{Authorization:`Bearer ${accessToken}`}
      });
    } else {
      return req;
    }
  }
}
//:{'Authorization', `Bearer ${accessToken}`} 