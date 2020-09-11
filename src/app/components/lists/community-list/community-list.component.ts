import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from '../../../services/shared/pagination.service';
import { PageEvent } from '@angular/material/paginator';
import { ICommunityService } from 'src/app/services/interfaces/community.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss']
})
export class CommunityListComponent implements OnInit {
  public dataSource: MatTableDataSource<string>;
  public totalCount = 0;

  constructor(
    public paginationService: PaginationService,
    public communityService: ICommunityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCommunities();
  }

  getCommunities(): void {
    this.communityService.getCommunities().subscribe((response: any) => {
      this.dataSource = response.communities;
      this.totalCount = response.pagination.totalCount;
    });
  }

  viewCommunity(community: any): void {
    this.router.navigateByUrl(`/social/community/${community.url}`);
  }

  pageChange(event: PageEvent): void {
    this.paginationService.change(event);
    this.getCommunities();
  }
}
