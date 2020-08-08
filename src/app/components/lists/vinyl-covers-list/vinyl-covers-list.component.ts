import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddVinylComponent } from '../../dialogs/dialog-add-vinyl/dialog-add-vinyl.component';

@Component({
  selector: 'app-vinyl-covers-list',
  templateUrl: './vinyl-covers-list.component.html',
  styleUrls: ['./vinyl-covers-list.component.scss']
})
export class VinylCoversListComponent implements OnInit {
  public vinylList = [];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.vinylList = [
      {
        band: 'Venom',
        album: 'Black Metal',
        genre: 'Black/Thrash Metal',
        cover: 'https://img.discogs.com/LoOYIE5q0WsNFgI-TcqJS8v7SBk=/fit-in/599x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6336114-1576617124-3717.jpeg.jpg'
      },
      {
        band: 'Bathory',
        album: 'Bathory',
        genre: 'Black/Thrash Metal',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/cff220dcb7d24c4ecc931302c49d76bd.jpg'
      },
      {
        band: 'Metallica',
        album: 'Master of Puppets',
        genre: 'Thrash Metal',
        cover: 'https://wikirock.net/tienda/wp-content/uploads/2020/06/81hryXAVZjL._SL1425_.jpg'
      },
      {
        band: 'Death',
        album: 'Scream Bloody Gore',
        genre: 'Death Metal',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/81S29hBwizL._SL1200_.jpg'
      },
      {
        band: 'Necrophagist',
        album: 'Epitaph',
        genre: 'Death Metal',
        cover: 'https://i0.wp.com/metalobscura.com/wp-content/uploads/2016/05/Necrophagist-Epitaph.jpg?fit=750%2C750&ssl=1'
      },
      {
        band: 'Mayhem',
        album: 'De Mysteriis Dom Sathanas',
        genre: 'Black Metal',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61bI-dnx3sL._SY355_.jpg'
      },
      {
        band: 'The Black Dahlia Murder',
        album: 'Verminous',
        genre: 'Melodic Death Metal',
        cover: 'https://i0.wp.com/www.elsantuariodelrock.com/blog/wp-content/uploads/2020/05/The-Black-Dahlia-Murder-Verminous.jpg?resize=640%2C640'
      },
      {
        band: 'Cradle of Filth',
        album: 'Cruelty and the Beast - Re-Mistressed',
        genre: 'Symphonic Black Metal',
        cover: 'https://imagizer.imageshack.com/v2/657x657q90/922/K36SDh.jpg'
      },
      {
        band: 'Bathory',
        album: 'Under the Sign of Black Mark',
        genre: 'Black/Thrash Metal',
        cover: 'https://i1148.photobucket.com/albums/o578/other_MikeYoung/cover13325315414f6cd1552676b_zpsdinlrme7.jpg'
      },
      {
        band: 'Possessed',
        album: 'Seven Churches (Re issue 2019)',
        genre: 'Death Metal',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61C6mI30tzL._SY355_.jpg'
      },
      {
        band: 'Dimmu Borgir',
        album: 'In Sorte Diaboli',
        genre: 'Symphonic Black Metal',
        cover: 'https://www.brutalizedrecords.com/pub/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/d/b/db-isd.jpg'
      },
      {
        band: 'Immortal',
        album: 'Battles in the North',
        genre: 'Black Metal',
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Battles_In_The_North.jpg'
      },
      {
        band: 'Mayhem',
        album: 'Deathcrush',
        genre: 'Black Metal',
        cover: 'https://friedhof-magazine.com/sites/default/files/criticas/criticas_mayhem_280318.jpg'
      },
      {
        band: 'Dimmu Borgir',
        album: 'For All Tid',
        genre: 'Symphonic Black Metal',
        cover: 'https://img.discogs.com/bwQF_VNw5KDgBhBNmuUXdHUCRIo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-368846-1363379668-8285.jpeg.jpg'
      },
      {
        band: 'Destruction',
        album: 'Eternal Devastation',
        genre: 'Thrash Metal',
        cover: 'https://lastfm.freetls.fastly.net/i/u/500x500/a60f5653babc16b6e1888e2640426146.jpg'
      },
      {
        band: 'Midnight',
        album: 'Rebirth by Blasphemy',
        genre: 'Black/Thrash Metal',
        cover: 'https://lastfm.freetls.fastly.net/i/u/ar0/950ee5f7f7340586a57ef13110c98945.jpg'
      },
      {
        band: 'Mercyful Fate',
        album: 'Melissa',
        genre: 'Heavy Metal',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/ec2e9c919816e02685310211d1d1d5e2.jpg'
      },
      {
        band: 'Power Trip',
        album: 'Nightmare Logic',
        genre: 'Thrash Metal',
        cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/714635e820b7e9cc3aff10807a32d60e.jpg'
      },
    ];
  }

  addVinyl(): void {
    const dialogRef = this.dialog.open(DialogAddVinylComponent, {
      disableClose: true,
      width: '980px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
