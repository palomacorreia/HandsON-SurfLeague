import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Surfista} from './surfista';
@Injectable()
export class SurfistaService {
    private heroesUrl = 'api/surfistas';  // URL to web api
    constructor(private http: Http) { }
    getSurfistas(): Promise<Surfista[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getSurfista(numero: number) {
        return this.http.get(`${this.heroesUrl}/${numero}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    save(surfistas: Surfista): Promise<Surfista>  {
        if (surfistas.numero) {
            return this.put(surfistas);
        }
        return this.post(surfistas);
    }
    delete(surfistas: Surfista) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${surfistas.numero}`;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }
    // Add new Hero
    private post(surfistas: Surfista): Promise<Surfista> {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http
            .post(this.heroesUrl, JSON.stringify(surfistas), {headers: headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    // Update existing Hero
    private put(surfistas: Surfista) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${surfistas.numero}`;
        return this.http
            .put(url, JSON.stringify(surfistas), {headers: headers})
            .toPromise()
            .then(() => surfistas)
            .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}