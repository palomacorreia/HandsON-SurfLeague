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
const surfista_service_1 = require("./Surfista/surfista.service");
let DashboardComponent = class DashboardComponent {
    constructor(router, surfistaService) {
        this.router = router;
        this.surfistaService = surfistaService;
        this.addingSurfista = false;
    }
    getSurfistas() {
        this.surfistaService
            .getSurfistas()
            .then(surfistas => this.surfistas = surfistas)
            .catch(error => this.error = error); // TODO: Display error message
    }
    addSurfista() {
        this.addingSurfista = true;
        this.selectedSurfista = null;
    }
    close(savedSurfista) {
        this.addingSurfista = false;
        if (savedSurfista) {
            this.getSurfistas();
        }
    }
    delete(surfistas, event) {
        event.stopPropagation();
        this.surfistaService
            .delete(surfistas)
            .then(res => {
            this.surfistas = this.surfistas.filter(h => h !== surfistas);
            if (this.selectedSurfista === surfistas) {
                this.selectedSurfista = null;
            }
        })
            .catch(error => this.error = error); // TODO: Display error message
    }
    ngOnInit() {
        this.getSurfistas();
    }
    onSelect(surfistas) {
        this.selectedSurfista = surfistas;
        this.addingSurfista = false;
    }
    gotoDetail() {
        this.router.navigate(['SurfistaDetail', { numero: this.selectedSurfista.numero }]);
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: 'app/dashboard.component.html',
        styleUrls: ['app/dashboard.component.css']
    }), 
    __metadata('design:paramtypes', [router_deprecated_1.Router, surfista_service_1.SurfistaService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
