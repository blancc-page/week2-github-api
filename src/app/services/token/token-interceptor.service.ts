import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token!: string;

  constructor(private injector: Injector) { 
    const token = environment.API_KEY;
  }

  intercept(req, next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer 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`
      }
    });
    return next.handle(tokenizedReq);
  }
}
