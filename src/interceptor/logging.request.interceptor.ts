import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    Logger.debug('Start request...', 'LoggingRequestInterceptor');
    const http = context.switchToHttp();
    const req = http.getRequest();
    Logger.debug(`request url is ${req.url}`, 'LoggingRequestInterceptor');
    Logger.debug(`request query is ${JSON.stringify(req.query)}`, 'LoggingRequestInterceptor');
    Logger.debug(`request params is ${JSON.stringify(req.params)}`, 'LoggingRequestInterceptor');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => Logger.debug(`End request... ${Date.now() - now}ms`, 'LoggingRequestInterceptor')),
      );
  }
}
