import { Component, OnInit, Inject } from '@angular/core';
import { ILastFMService } from 'src/app/services/interfaces/lastFM.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { IVinylService } from 'src/app/services/interfaces/vinyl.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IParameterService } from 'src/app/services/interfaces/parameter.interface';

@Component({
  selector: 'app-dialog-add-vinyl',
  templateUrl: './dialog-add-vinyl.component.html',
  styleUrls: ['./dialog-add-vinyl.component.scss']
})
export class DialogAddVinylComponent implements OnInit {
  public formGroup: FormGroup;
  public genreList: any = [];
  public countryList: any;
  public genresList: any;
  public subGenresList: any;

  public colorList = [
    'Black',
    'Black/White/Grey',
    'Blue',
    'Clear/Red',
    'Crystal Clear',
    'Green',
    'Green/Black',
    'Purple',
    'Red',
    'Red/Blue',
    'Silver / Black Marbled',
    'White',
    'Yellow'
  ];

  public vinylTypes = [
    'Reissue'
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAddVinylComponent>,
    private lastFM: ILastFMService,
    private formBuilder: FormBuilder,
    private vinylService: IVinylService,
    private parameterService: IParameterService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: [0],
      band: ['', Validators.required],
      album: ['', Validators.required],
      genre: [0],
      id_SubGenre: [0, Validators.required],
      coverURL: ['', Validators.required],
      dateReleased: [''],
      id_Country: [0, Validators.required],
      info: [''],
      color: ['Black', Validators.required],
      disc: [1],
      price: [0, Validators.required],
      currency: ['Euro', Validators.required],
      link: [''],
      type: [''],
      notes: [''],
    });

    this.getCountries();
    this.getGenres();
  }

  getCountries(): void {
    this.parameterService.getCountries().subscribe((response: any) => {
      this.countryList = response;
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

        // this.createGenresList(info.tags);

        this.formGroup.patchValue({
          band: info.artist,
          album: info.name,
          info: info.wiki ? info.wiki.content : '',
          coverURL: urlImage ? urlImage['#text'] : ''
        });
      }
    });
  }

  getGenres(): void {
    this.parameterService.getGenres(true).subscribe((response: any) => {
      this.genresList = response;
    });
  }

  getSubGenres(): void {
    const genre = this.formGroup.value.genre;

    this.parameterService.getSubgenresByGenre(genre).subscribe((response: any) => {
      this.subGenresList = response;
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

    this.vinylService.saveVinyl(form).subscribe((response: any) => {
      if (response) {
        Swal.fire({
          title: 'Saved',
          text: 'Vinyl item was added successfully',
          icon: 'success',
          timer: 1000
        });

        this.dialogRef.close(form);
      }
    });
  }
}
