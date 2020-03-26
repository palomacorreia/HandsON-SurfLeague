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
let SurfistaService = class SurfistaService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/surfistas'; // URL to web api
    }
    getSurfistas() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getSurfista(numero) {
        return this.http.get(`${this.heroesUrl}/${numero}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    save(surfistas) {
        if (surfistas.numero) {
            return this.put(surfistas);
        }
        return this.post(surfistas);
    }
    delete(surfistas) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${surfistas.numero}`;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }
    // Add new Hero
    post(surfistas) {
        let headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.heroesUrl, JSON.stringify(surfistas), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    // Update existing Hero
    put(surfistas) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${surfistas.numero}`;
        return this.http
            .put(url, JSON.stringify(surfistas), { headers: headers })
            .toPromise()
            .then(() => surfistas)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
SurfistaService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], SurfistaService);
exports.SurfistaService = SurfistaService;
