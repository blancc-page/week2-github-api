import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

// using headers to authorize api access

export class TokenInterceptorService implements HttpInterceptor {
  token!: string;

  constructor(private injector: Injector) { }

  intercept(req,next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${environment.API_KEY}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
