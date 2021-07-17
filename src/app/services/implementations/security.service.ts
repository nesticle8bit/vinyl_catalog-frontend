import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { ISecurityService } from '../interfaces/security.interface';
import { UserModel } from '../../models/security/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
        formData.append('avatar', file, file.name);
        formData.append('userId', this.getCurrentUser().userInfo.id);

        return this.http.post<any>(`${environment.api}/users/changeUserAvatar`, formData, {reportProgress: true, observe: 'events'})
            .pipe(map((response: any) => {
                return response;
            }));
    }
}
