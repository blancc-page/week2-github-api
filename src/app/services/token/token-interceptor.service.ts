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
    let token = environment.API_KEY;
  }

  intercept(req,next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        authorization: `Bearer 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`
      }
    });
    return next.handle(tokenizedReq);
  }
}
