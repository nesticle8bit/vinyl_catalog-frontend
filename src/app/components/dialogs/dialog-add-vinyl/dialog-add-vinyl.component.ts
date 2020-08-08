import { Component, OnInit } from '@angular/core';
import { ILastFMService } from 'src/app/services/interfaces/lastFM.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-add-vinyl',
  templateUrl: './dialog-add-vinyl.component.html',
  styleUrls: ['./dialog-add-vinyl.component.scss']
})
export class DialogAddVinylComponent implements OnInit {
  public formGroup: FormGroup;
  public genreList: any = [];

  constructor(
    private lastFM: ILastFMService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: [0],
      band: ['', Validators.required],
      album: ['', Validators.required],
      genre: ['', Validators.required],
      coverURL: ['', Validators.required],
      dateReleased: ['', Validators.required],
      country: ['', Validators.required],
      info: ['', Validators.required],
    });
  }

  getLastFMBandInfo(): void {
    const form = Object.assign({}, this.formGroup.value);

    if (!form || !form.band || !form.album) {
      return;
    }

    this.lastFM.getAlbumInfo(form.band, form.album).subscribe((info: any) => {
      if (info) {
        console.log(info);

        const urlImage = info.image.filter((img: any) => img.size === 'extralarge')[0];

        this.createGenresList(info.tags);

        this.formGroup.patchValue({
          band: info.artist,
          album: info.name,
          info: info.wiki ? info.wiki.content : '',
          coverURL: urlImage ? urlImage['#text'] : ''
        });
      }
    });
  }

  createGenresList(tags: any): void {
    if (!tags || !tags.tag) {
      return;
    }

    tags.tag.map((genre: any) => {
      this.genreList.push(this.titleCase(genre.name));
    });
  }

  titleCase(str: any): string {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(' ');
  }

  saveVinyl(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const form = Object.assign({}, this.formGroup.value);

    console.log(form);
    // Swal.fire({title: 'Test', text: 'test', icon: 'success'});
  }
}
