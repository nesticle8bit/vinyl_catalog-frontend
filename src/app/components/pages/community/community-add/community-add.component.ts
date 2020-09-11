import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICommunityService } from 'src/app/services/interfaces/community.interface';

@Component({
  selector: 'app-community-add',
  templateUrl: './community-add.component.html',
  styleUrls: ['./community-add.component.scss']
})
export class CommunityAddComponent implements OnInit {
  public error = {
    url: false
  };

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private communityService: ICommunityService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      url: ['', [Validators.required, Validators.maxLength(50)]],
      publishRule: [''],
      commentRule: [''],
      nsfw: [false],
    });
  }

  createCommunity(): void {
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
  }

  verifyURLCommunity(): void {
    const formGroup = this.formGroup.value;

    if (!formGroup || !formGroup.url) {
      return;
    }

    this.communityService.verifyCommunityURL(formGroup.url).subscribe((exists: any) => {
      console.log(exists);
      if (exists) {
        this.error.url = true;
      } else {
        this.error.url = false;
      }
    });
  }

}
