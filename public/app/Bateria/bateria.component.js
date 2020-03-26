"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_deprecated_1 = require('@angular/router-deprecated');
const surfista_service_1 = require("../Surfista/surfista.service");
const bateria_service_1 = require("./bateria.service");
let BateriaComponent = class BateriaComponent {
    constructor(router, bateriaService, surfistaService) {
        this.router = router;
        this.bateriaService = bateriaService;
        this.surfistaService = surfistaService;
    }
    getSurfistas() {
        this.surfistaService
            .getSurfistas()
            .then(surfistas => this.surfistas = surfistas)
            .catch(error => this.error = error); // TODO: Display error message
    }
    getBaterias() {
        this.bateriaService
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
};
BateriaComponent = __decorate([
    core_1.Component({
        selector: 'my-surf',
        templateUrl: 'app/Bateria/bateria.component.html',
        styleUrls: ['app/bateria.component.css'],
    }), 
    __metadata('design:paramtypes', [router_deprecated_1.Router, bateria_service_1.BateriaService, surfista_service_1.SurfistaService])
], BateriaComponent);
exports.BateriaComponent = BateriaComponent;
