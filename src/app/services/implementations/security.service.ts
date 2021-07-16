import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { ISecurityService } from '../interfaces/security.interface';
import { UserModel } from '../../models/security/user.model';
import { Router } from '@angular/router';

@Injectable()
export class SecurityService extends ISecurityService {
    public currentUser: Observable<UserModel>;
    private currentUserSubject: BehaviorSubject<UserModel>;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        super();

        this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('vinylCatalogClub')));
        this.currentUser = this.currentUserSubject.asObservable();
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

    getCurrentUser(): any {
        return this.currentUserSubject.value;
    }

    setUserToLocalStorage(obj: any): any {
        localStorage.setItem('vinylCatalogClub', JSON.stringify(obj));
        this.currentUserSubject.next(obj);
    }

    login(user: any): Observable<any> {
        return this.http.post<any>(`${environment.api}/users/loginUser`, user)
            .pipe(map((response: any) => {
                return response;
            }));
    }

    logout(): void {
        localStorage.removeItem('vinylCatalogClub');

        this.router.navigateByUrl('');
        this.currentUserSubject.next(null);
    }

    changeUserAvatar(file: any): Observable<any> {
        const formData = new FormData();
        formData.append("avatar", file);

        return this.http.post<any>(`${environment.api}/users/loginUser`, formData)
            .pipe(map((response: any) => {
                return response;
            }));
    }
}
