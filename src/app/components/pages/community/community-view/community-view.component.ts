import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICommunityService } from 'src/app/services/interfaces/community.interface';

@Component({
  selector: 'app-community-view',
  templateUrl: './community-view.component.html',
  styleUrls: ['./community-view.component.scss']
})
export class CommunityViewComponent implements OnInit {
  public community: any;

  constructor(
    private route: ActivatedRoute,
    private communityService: ICommunityService
  ) { }

  ngOnInit(): void {
    this.getCommunityInfo(this.route.snapshot.paramMap.get('url'));
  }

  getCommunityInfo(url: string): void {
    this.communityService.getCommunityByURL(url).subscribe((response: any) => {
      this.community = response;
    });
  }
}
