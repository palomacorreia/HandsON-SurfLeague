import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import { Surfista }                from './surfista';
import { SurfistaService }         from './surfista.service';
import { SurfistaDetailComponent } from './surfista-detail.component';
@Component({
    selector: 'my-surf',
    templateUrl: 'app/surfista.component.html',
    styleUrls:  ['app/surfista.component.css'],
    directives: [SurfistaDetailComponent]
})
export class SurfistaComponent implements OnInit {
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