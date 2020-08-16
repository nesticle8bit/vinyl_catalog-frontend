import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterComponent } from '../../dialogs/security/dialog-register/dialog-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    console.log(this.formGroup.value);

    if (this.formGroup.invalid) {
      return;
    }
  }

  register(): void {
    this.dialog.open(DialogRegisterComponent, {
      width: '980px',
      disableClose: true
    });
  }
}
