import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  // req!: any;

  constructor() { }

  intercept(req, next){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer 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`
      }
    });
    return next.handle(tokenizedReq);
  }
}
