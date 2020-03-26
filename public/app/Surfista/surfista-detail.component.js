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
const surfista_1 = require('./surfista');
const surfista_service_1 = require('./surfista.service');
let SurfistaDetailComponent = class SurfistaDetailComponent {
    constructor(surfistaService, routeParams) {
        this.surfistaService = surfistaService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    ngOnInit() {
        if (this.routeParams.get('numero') !== null) {
            let numero = +this.routeParams.get('numero');
            this.navigated = true;
            this.surfistaService.getSurfista(numero)
                .then(surfistas => this.surfistas = surfistas);
        }
        else {
            this.navigated = false;
            this.surfistas = new surfista_1.Surfista();
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
    goBack(savedSurfista = null) {
        this.close.emit(savedSurfista);
        if (this.navigated) {
            window.history.back();
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', surfista_1.Surfista)
], SurfistaDetailComponent.prototype, "surfistas", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], SurfistaDetailComponent.prototype, "close", void 0);
SurfistaDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-surf-detail',
        templateUrl: 'app/surfista-detail.component.html',
        styleUrls: ['app/surfista-detail.component.css']
    }), 
    __metadata('design:paramtypes', [surfista_service_1.SurfistaService, router_deprecated_1.RouteParams])
], SurfistaDetailComponent);
exports.SurfistaDetailComponent = SurfistaDetailComponent;
