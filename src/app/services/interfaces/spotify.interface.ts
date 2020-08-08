import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class ISpotifyService {
    abstract search(band: string, type: string): Observable<any>;
}
