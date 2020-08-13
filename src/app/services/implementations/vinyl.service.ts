import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IVinylService } from '../interfaces/vinyl.interface';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { SearchService } from '../implementations/search.service';

@Injectable()
export class VinylService extends IVinylService {
    constructor(
        private http: HttpClient
    ) {
        super();
    }

    searchVinyls(search: string): Observable<any> {
        return this.http.get<any>(`${environment.api}/vinyl/getVinyls?search=${search}`)
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

    saveVinyl(vinyl: any): Observable<any> {
        return this.http.post<any>(`${environment.api}/vinyl/saveVinyl`, vinyl)
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
