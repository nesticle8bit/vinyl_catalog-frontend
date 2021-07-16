import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  constructor() { }

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
  }

  isImageAllowed(format: string): boolean {
    const available = ['png', 'jpg', 'jpeg'];
    return available.includes(format);
  }
}
