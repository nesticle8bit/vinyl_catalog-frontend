import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterComponent } from '../../dialogs/security/dialog-register/dialog-register.component';
import { ISecurityService } from 'src/app/services/interfaces/security.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public returnUrl: string;
  public errors: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private securityService: ISecurityService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.returnUrl = params ? params.returnUrl : '';
    });

    this.formGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.formGroup.invalid) {
      return;
    }

    this.errors = undefined;

    const user = Object.assign({}, this.formGroup.value);

    this.securityService.login(user).subscribe((response: any) => {
      if (response.status === 200) {
        this.router.navigate([this.returnUrl ? this.returnUrl : `/admin/`]);
        this.securityService.setUserToLocalStorage(response.data);
      } else {
        this.errors = response.errors.join(',');
      }
    });
  }

  register(): void {
    this.dialog.open(DialogRegisterComponent, {
      width: '980px',
      disableClose: true
    });
  }
}
