import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from '../../../services/shared/pagination.service';
import { PageEvent } from '@angular/material/paginator';
import { ICommunityService } from 'src/app/services/interfaces/community.interface';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styles: [
  ]
})
export class CommunityListComponent implements OnInit {
  public dataSource: MatTableDataSource<string>;
  public totalCount = 0;

  constructor(
    public paginationService: PaginationService,
    public communityService: ICommunityService
  ) { }

  ngOnInit(): void {
    this.getCommunities();
  }

  getCommunities(): void {
    this.communityService.getCommunities().subscribe((response: any) => {
      this.dataSource = response.publicaciones;
      this.totalCount = response.pagination.totalCount;
    });
  }

  pageChange(event: PageEvent): void {
    this.paginationService.change(event);
    this.getCommunities();
  }
}
