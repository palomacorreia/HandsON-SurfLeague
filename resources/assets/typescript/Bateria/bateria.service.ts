import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Surfista} from "../Surfista/surfista";
import {Bateria} from "./bateria";

@Injectable()
export class BateriaService {

    private heroesUrl = 'api/baterias';  // URL to web api
    constructor(private http: Http) { }
   getBaterias(): Promise<Bateria[]> {
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

    save(baterias: Bateria): Promise<Bateria>  {
        if (baterias.id) {
            return this.put(baterias);
        }
        return this.post(baterias);
    }

    private post(baterias: Bateria): Promise<Surfista> {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http
            .post(this.heroesUrl, JSON.stringify(baterias), {headers: headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    private put(baterias: Bateria) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${baterias.id}`;
        return this.http
            .put(url, JSON.stringify(baterias), {headers: headers})
            .toPromise()
            .then(() => baterias)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}