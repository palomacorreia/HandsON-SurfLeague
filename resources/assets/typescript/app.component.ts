import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './Heroes/heroes.component';
import { HeroDetailComponent } from './Heroes/hero-detail.component';
import { HeroService }         from './Heroes/hero.service';
import { SurfistaComponent }     from './Surfista/surfista.component';
import { SurfistaDetailComponent } from './Surfista/surfista-detail.component';
import { SurfistaService }         from './Surfista/surfista.service';
import {BateriaComponent} from "./Bateria/bateria.component";
import {BateriaService} from "./Bateria/bateria.service";
@Component({
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

    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SurfistaService,
        BateriaService
        // HeroService
    ]
})
@RouteConfig([
    { path: '/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
    { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  //  { path: '/heroes',     name: 'Heroes',     component: HeroesComponent },
    { path: '/surfistas',     name: 'Surfistas',     component: SurfistaComponent },
    { path: '/surf/:numero', name: 'SurfistaDetail', component: SurfistaDetailComponent },
    { path: '/baterias',     name: 'Baterias',     component: BateriaComponent }
])
export class AppComponent {
    title = 'Circuito Mundial de Surf';
}