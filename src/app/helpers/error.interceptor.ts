import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { catchError, Observable, throwError } from "rxjs";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {};
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err => {
            const error = err;
            this.showErrorAlert(error.statusCode);
            return throwError(() => error);
        }))
    }

    getErrorMessages(type: any){
        const errors: any = {
            400: 'An error has occurred',
            404: 'An error has occurred',
            'default': 'An error has occurred'
        };

        return (errors[type] || errors['default']);
    }

    showErrorAlert(error: number | string){
        const errorMessage = this.getErrorMessages(error);
        this.toastr.error('Error', errorMessage);
    }
}