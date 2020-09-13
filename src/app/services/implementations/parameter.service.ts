
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { IParameterService } from '../interfaces/parameter.interface';

@Injectable()
export class ParameterService extends IParameterService {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getCountries(): Observable<any> {
        return this.http.get<any>(`${environment.api}/countries/getCountries`)
            .pipe(map((response: any) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.errors.join(',')
                    });
                }
            }));
    }

    getGenres(getAll: boolean): Observable<any> {
        return this.http.get<any>(`${environment.api}/genres/getGenres?getAll=${getAll}`)
            .pipe(map((response: any) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.errors.join(',')
                    });
                }
            }));
    }

    getSubgenresByGenre(genreId: number): Observable<any> {
        return this.http.get<any>(`${environment.api}/genres/getSubGenresByGenreId?id=${genreId}`)
            .pipe(map((response: any) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.errors.join(',')
                    });
                }
            }));
    }
}
