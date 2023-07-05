import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LoadingOverlayRef, LoadingService } from './loading.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request URL matches the desired URL where you want the interceptor to be applied
    if (request.url.includes(environment.baseUrl)) {
      let loadingRef: LoadingOverlayRef;

      Promise.resolve(null).then(() => loadingRef = this.loadingService.open());

      return next.handle(request).pipe(
        tap(event => {
          if (event instanceof HttpResponse && loadingRef) {
            loadingRef.close();
          }
        }),
        catchError(error => {
          if (loadingRef) {
            loadingRef.close();
          }

          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }

}
