import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class IVinylService {
    abstract searchVinyls(search: string): Observable<any>;
    abstract saveVinyl(vinyl: any): Observable<any>;
}
