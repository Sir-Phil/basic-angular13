import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, throwError} from "rxjs";
import { IProduct } from "../components/products/product";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})

export class ProductService {

    private productbaseUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productbaseUrl)
        .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.HandleError)
        );
    }

    private HandleError(err: HttpErrorResponse) {
        // real life app,send the server to some remote logging infrastructure
        // instead of console logging
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // client side or network error occured
            errorMessage = `An Error Occured : ${err.error.message}`
        }else {
            // the backend returned an unsuccessful response code.
            // the response body mat contain clues as to what went wrong,
            errorMessage = `Server returned code : ${err.status}, error message is : ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}