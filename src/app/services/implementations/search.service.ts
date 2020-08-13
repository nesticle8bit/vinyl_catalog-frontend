import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private filter = new Subject<any>();
  constructor() { }

  sendFilter(filterText: string): void {
    this.filter.next({ text: filterText });
  }

  clearFilter(): void {
    this.filter.next();
  }

  getFilter(): Observable<any>{
    return this.filter.asObservable();
  }
}
