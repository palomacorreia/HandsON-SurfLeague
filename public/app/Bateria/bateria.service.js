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
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let BateriaService = class BateriaService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/baterias'; // URL to web api
    }
    getBaterias() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    /*
   getSurfista(numero: number) {
       return this.http.get(`${this.heroesUrl}/${numero}`)
           .toPromise()
           .then(response => response.json())
           .catch(this.handleError);
   }*/
    save(baterias) {
        if (baterias.id) {
            return this.put(baterias);
        }
        return this.post(baterias);
    }
    post(baterias) {
        let headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.heroesUrl, JSON.stringify(baterias), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    put(baterias) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${baterias.id}`;
        return this.http
            .put(url, JSON.stringify(baterias), { headers: headers })
            .toPromise()
            .then(() => baterias)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
BateriaService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], BateriaService);
exports.BateriaService = BateriaService;
