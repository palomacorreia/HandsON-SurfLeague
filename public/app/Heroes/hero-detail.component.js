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
const hero_1 = require('./hero');
const hero_service_1 = require('./hero.service');
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, routeParams) {
        this.heroService = heroService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        }
        else {
            this.navigated = false;
            this.hero = new hero_1.Hero();
        }
    }
    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
            this.hero = hero; // saved hero, w/ id if new
            this.goBack(hero);
        })
            .catch(error => this.error = error); // TODO: Display error message
    }
    goBack(savedHero = null) {
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], HeroDetailComponent.prototype, "close", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        templateUrl: 'app/hero-detail.component.html',
        styleUrls: ['app/hero-detail.component.css']
    }), 
    __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.RouteParams])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
