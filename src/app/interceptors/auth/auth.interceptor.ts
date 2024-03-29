import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (!localStorage.getItem('token')) {
      this.authService.logout();
      this.authService.routeAuth();
    }
    if (request.headers.get('Authorization')) {
      if (!this.authService.isLoggedIn()) {
        this.authService.logout();
        this.authService.routeAuth();
      }
    }

    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', token),
      });

      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
