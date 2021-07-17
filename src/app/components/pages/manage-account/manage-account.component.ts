import { Component, OnInit } from '@angular/core';
import { ISecurityService } from 'src/app/services/interfaces/security.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  constructor(
    private securityService: ISecurityService
  ) { }

  ngOnInit(): void {
  }

  avatarUpload(file: any): void {
    const currentFile = file?.target?.files[0];
    console.log(currentFile);

    if(!currentFile) {
      return;
    }

    const fileFormat = currentFile.name.split('.').pop();

    if(!this.isImageAllowed(fileFormat)) {
      Swal.fire({
        title: 'Error',
        text: 'Error trying to upload an avatar, please select an image',
        icon: 'warning'
      });

      return;
    }

    this.securityService.changeUserAvatar(currentFile).subscribe((response: any) => {
      if(response) {
        Swal.fire({
          title: 'Changed',
          text: 'Avatar was changed succesfully',
          icon: 'success',
          timer: 3000
        });
      }
    });
  }

  isImageAllowed(format: string): boolean {
    const available = ['png', 'jpg', 'jpeg'];
    return available.includes(format);
  }
}
