import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISecurityService } from '../../../../services/interfaces/security.interface';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogRegisterComponent>,
    private formBuilder: FormBuilder,
    private securityService: ISecurityService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      accept: [false, Validators.requiredTrue]
    });
  }

  register(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const user = Object.assign({}, this.formGroup.value);

    this.securityService.registerAccount(user).subscribe((response: any) => {
      if (response) {
        Swal.fire({
          title: 'Created',
          text: 'You have created an account in our community',
          icon: 'success',
          timer: 3000
        });

        this.dialogRef.close();
      }
    });
  }
}
