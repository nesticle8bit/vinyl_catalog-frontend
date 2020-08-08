import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ILastFMService } from '../interfaces/lastFM.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class LastFMService extends ILastFMService {
    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getArtistInfo(band: string): Observable<any> {
        if (!band) {
            return;
        }

        return this.http.get<any>(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${band}&api_key=${environment.lastFmApiKey}&format=json`)
            .pipe(map((response: any) => {
                if (response.artist) {
                    return response.artist;
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.message
                    });
                }
            }));
    }

    getAlbumInfo(band: string, album: string): Observable<any> {
        if (!band || !album) {
            return;
        }

        return this.http.get<any>(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${environment.lastFmApiKey}&artist=${band}&album=${album}&format=json`)
            .pipe(map((response: any) => {
                if (response.album) {
                    return response.album;
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.message
                    });
                }
            }));
    }
}
