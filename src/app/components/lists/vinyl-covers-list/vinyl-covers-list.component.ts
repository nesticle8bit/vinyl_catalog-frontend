import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddVinylComponent } from '../../dialogs/dialog-add-vinyl/dialog-add-vinyl.component';
import { IVinylService } from 'src/app/services/interfaces/vinyl.interface';
import { VinylService } from 'src/app/services/implementations/vinyl.service';

@Component({
  selector: 'app-vinyl-covers-list',
  templateUrl: './vinyl-covers-list.component.html',
  styleUrls: ['./vinyl-covers-list.component.scss']
})
export class VinylCoversListComponent implements OnInit {
  public vinylList = [];
  public showInfo: false;

  constructor(
    public dialog: MatDialog,
    private vinylService: IVinylService
  ) { }

  ngOnInit(): void {
    this.getVinyls();
  }

  getVinyls(): void {
    this.vinylService.searchVinyls('').subscribe((response: any) => {
      this.vinylList = response;
    });
  }

  addVinyl(): void {
    const dialogRef = this.dialog.open(DialogAddVinylComponent, {
      disableClose: true,
      width: '1200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getVinyls();
      }
    });
  }

  getVinylColor(color: string): string {
    switch (color.toLowerCase()) {
      case 'green':
        return '#1abb44';
        case 'white':
        return '#d4d4d4';
        case 'purple':
        return '#c50909';
      default:
        return '';
    }
  }
}
