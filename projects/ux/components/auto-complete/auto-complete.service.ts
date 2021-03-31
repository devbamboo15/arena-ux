import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AutoCompleteOptions } from './auto-complete-options.model';

@Injectable({
    providedIn: 'root'
})
export class AutoCompleteService {

    constructor(private http: HttpClient) { }

    getUsers(url: string, queryParams: string, search: string): Observable<AutoCompleteOptions[]> {
        let params = new HttpParams();
        params = params.append(queryParams, search);
        return this.http.get<any>(url, { params }).pipe(
            map(res => {
                return res.data;
            })
        );
    }
}
