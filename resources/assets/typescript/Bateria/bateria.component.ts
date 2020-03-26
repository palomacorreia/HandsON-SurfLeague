import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {SurfistaService} from "../Surfista/surfista.service";
import {Surfista} from "../Surfista/surfista";
import {Bateria} from "./bateria";
import {BateriaService} from "./bateria.service";
@Component({
    selector: 'my-surf',
    templateUrl: 'app/Bateria/bateria.component.html',
    styleUrls:  ['app/bateria.component.css'],

})
export class BateriaComponent implements OnInit {
    surfistas: Surfista[];
    baterias:Bateria[];

    constructor(private router: Router, private bateriaService: BateriaService,  private surfistaService: SurfistaService) { }

    getSurfistas() {
        this. surfistaService
            .getSurfistas()
            .then(surfistas => this.surfistas = surfistas)
            .catch(error => this.error = error); // TODO: Display error message
    }
    getBaterias() {
        this. bateriaService
            .getBaterias()
            .then(baterias => this.baterias = baterias)
            .catch(error => this.error = error); // TODO: Display error message
    }
    save() {
        this.bateriaService
            .save(this.baterias)
            .then(baterias => {
                this.baterias = baterias;
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    ngOnInit() {
        this.getSurfistas();
        this.getBaterias();
    }
}