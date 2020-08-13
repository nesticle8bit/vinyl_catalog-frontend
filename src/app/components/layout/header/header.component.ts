import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IVinylService } from 'src/app/services/interfaces/vinyl.interface';
import { SearchService } from 'src/app/services/implementations/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private vinylService: IVinylService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: [''],
    });
  }

  searchVinyl(e: any): void {
    const search = this.formGroup.value.search;

    if (!search) {
      return;
    }

    this.searchService.sendFilter(search);
  }
}
