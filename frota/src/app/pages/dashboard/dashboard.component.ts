import { Component, OnInit } from '@angular/core';
import { cars, ICar } from '../../database/cars';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    arrCars: ICar[] = [];

    constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

    ngOnInit(): void {
        this.arrCars = cars;
    }

    rentCar(index: number) {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '400px',
            height: '250px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            this.arrCars.splice(index, 1);
            this._snackBar.open(
                `Carro alugado para ${result.client.name}`,
                'Fechar',
                {
                    duration: 2000,
                }
            );
        });
    }
}
