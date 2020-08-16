import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ISecurityService } from '../interfaces/security.interface';

@Injectable()
export class SecurityService extends ISecurityService {
    constructor(
        private http: HttpClient
    ) {
        super();
    }

    registerAccount(user: any): Observable<any> {
        return this.http.post<any>(`${environment.api}/users/registerAccount`, user)
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
