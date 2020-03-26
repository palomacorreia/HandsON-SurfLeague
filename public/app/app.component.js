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
const dashboard_component_1 = require('./dashboard.component');
const hero_detail_component_1 = require('./Heroes/hero-detail.component');
const surfista_component_1 = require('./Surfista/surfista.component');
const surfista_detail_component_1 = require('./Surfista/surfista-detail.component');
const surfista_service_1 = require('./Surfista/surfista.service');
const bateria_component_1 = require("./Bateria/bateria.component");
const bateria_service_1 = require("./Bateria/bateria.service");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Circuito Mundial de Surf';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Surfistas']">Surfistas</a>
        <a [routerLink]="['Baterias']">Bateria</a>
<!--      <a [routerLink]="['Heroes']">Heroes</a>-->
      
    </nav>
    <router-outlet></router-outlet>
  `,
        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        providers: [
            router_deprecated_1.ROUTER_PROVIDERS,
            surfista_service_1.SurfistaService,
            bateria_service_1.BateriaService
        ]
    }),
    router_deprecated_1.RouteConfig([
        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
        { path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent },
        //  { path: '/heroes',     name: 'Heroes',     component: HeroesComponent },
        { path: '/surfistas', name: 'Surfistas', component: surfista_component_1.SurfistaComponent },
        { path: '/surf/:numero', name: 'SurfistaDetail', component: surfista_detail_component_1.SurfistaDetailComponent },
        { path: '/baterias', name: 'Baterias', component: bateria_component_1.BateriaComponent }
    ]), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
