import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class ISecurityService {
    abstract registerAccount(user: any): Observable<any>;
}
