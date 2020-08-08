import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ISpotifyService } from '../interfaces/spotify.interface';

@Injectable()
export class SpotifyService extends ISpotifyService {
    constructor(
        private http: HttpClient
    ) {
        super();
    }

    search(band: string, type: string): Observable<any> {
        if (!band) {
            return;
        }

        return this.http.get<any>(`https://api.spotify.com/v1/search?q=${band}&type=${type}`)
            .pipe(map((response: any) => {
                return response;
            }));
    }
}
