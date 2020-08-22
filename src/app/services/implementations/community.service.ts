import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ICommunityService } from '../interfaces/community.interface';
import { PaginationService } from '../shared/pagination.service';
import Swal from 'sweetalert2';

@Injectable()
export class CommunityService extends ICommunityService {
    constructor(
        private http: HttpClient,
        private paginationService: PaginationService
    ) {
        super();
    }

    getCommunities(): Observable<any> {
        return this.http.get<any>(`${environment.api}/communities/getCommunities?page=${this.paginationService.page}&pageCount=${this.paginationService.pageCount}`)
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
