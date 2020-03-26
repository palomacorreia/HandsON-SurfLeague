import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Surfista }                from './surfista';
import { SurfistaService }         from './surfista.service';
@Component({
    selector: 'my-surf-detail',
    templateUrl: 'app/surfista-detail.component.html',
    styleUrls: ['app/surfista-detail.component.css']
})
export class SurfistaDetailComponent implements OnInit {
    @Input() surfistas: Surfista;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here
    constructor(
        private surfistaService: SurfistaService,
        private routeParams: RouteParams) {
    }
    ngOnInit() {
        if (this.routeParams.get('numero') !== null) {
            let numero = +this.routeParams.get('numero');
            this.navigated = true;
            this.surfistaService.getSurfista(numero)
                .then(surfistas => this.surfistas = surfistas);
        } else {
            this.navigated = false;
            this.surfistas = new Surfista();
        }
    }
    save() {
        this.surfistaService
            .save(this.surfistas)
            .then(surfistas => {
                this.surfistas = surfistas; // saved hero, w/ id if new
                this.goBack(surfistas);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    goBack(savedSurfista: Surfista = null) {
        this.close.emit(savedSurfista);
        if (this.navigated) { window.history.back(); }
    }
}