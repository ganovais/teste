import { Component, OnInit } from '@angular/core';
import { clients, IClient } from '../../database/clients';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
    arrClients: IClient[] = [];

    constructor() {}

    ngOnInit(): void {
        this.arrClients = clients;
    }
}
