import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { clients, IClient } from '../../../database/clients';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
    arrClients: IClient[] = [];
    form: FormGroup;
    filteredOptions!: Observable<IClient[]>;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<DialogComponent>,
        private _snackBar: MatSnackBar
    ) {
        this.form = this.formBuilder.group({
            client: [null],
        });
    }

    ngOnInit(): void {
        this.arrClients = clients;
        this.filteredOptions = this.form.controls['client'].valueChanges.pipe(
            startWith(''),
            map((value) => (typeof value === 'string' ? value : value.name)),
            map((name) => (name ? this._filter(name) : this.arrClients.slice()))
        );
    }

    displayFn(user: IClient): string {
        return user && user.name ? user.name : '';
    }

    private _filter(value: string): IClient[] {
        const filterValue = value.toLowerCase();

        return this.arrClients.filter(
            (option) => option.name.toLowerCase().indexOf(filterValue) === 0
        );
    }

    closeModal(): void {
        if (!this.form.value || !this.form.value.client) {
            this._snackBar.open(`Informe um cliente`, 'Fechar', {
                duration: 2000,
            });
            return;
        }

        this.dialogRef.close(this.form.value);
    }
}
