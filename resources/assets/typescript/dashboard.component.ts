import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {SurfistaService} from "./Surfista/surfista.service";
import {Surfista} from "./Surfista/surfista";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    surfistas: Surfista[];
    selectedSurfista: Surfista;
    addingSurfista = false;
    error: any;
    constructor(
        private router: Router,
        private surfistaService: SurfistaService) { }
    getSurfistas() {
        this. surfistaService
            .getSurfistas()
            .then(surfistas => this.surfistas = surfistas)
            .catch(error => this.error = error); // TODO: Display error message
    }
    addSurfista() {
        this.addingSurfista = true;
        this.selectedSurfista = null;
    }
    close(savedSurfista: Surfista) {
        this.addingSurfista = false;
        if (savedSurfista) { this.getSurfistas(); }
    }
    delete(surfistas: Surfista, event: any) {
        event.stopPropagation();
        this.surfistaService
            .delete(surfistas)
            .then(res => {
                this.surfistas = this.surfistas.filter(h => h !== surfistas);
                if (this.selectedSurfista === surfistas) { this.selectedSurfista = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    ngOnInit() {
        this.getSurfistas();
    }
    onSelect(surfistas: Surfista) {
        this.selectedSurfista = surfistas;
        this.addingSurfista = false;
    }
    gotoDetail() {
        this.router.navigate(['SurfistaDetail', { numero: this.selectedSurfista.numero }]);
    }
}