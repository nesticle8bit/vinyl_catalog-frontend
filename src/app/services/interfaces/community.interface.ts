import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class ICommunityService {
    abstract getCommunities(): Observable<any>;
    abstract verifyCommunityURL(url: string): Observable<any>;
}
