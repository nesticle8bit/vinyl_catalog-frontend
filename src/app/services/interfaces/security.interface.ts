import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class ISecurityService {
    abstract registerAccount(user: any): Observable<any>;
    abstract getCurrentUser(): any;
    abstract setUserToLocalStorage(obj: any): any;
    abstract login(user: any): Observable<any>;
    abstract logout(): void;
}
