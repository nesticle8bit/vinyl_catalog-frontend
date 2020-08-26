import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-community-add',
  templateUrl: './community-add.component.html',
  styleUrls: ['./community-add.component.scss']
})
export class CommunityAddComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
    console.log(this.formGroup.value);
  }

}
