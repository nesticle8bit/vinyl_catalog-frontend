import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class IVinylService {
    abstract getVinyls(): Observable<any>;
    abstract saveVinyl(vinyl: any): Observable<any>;
}
