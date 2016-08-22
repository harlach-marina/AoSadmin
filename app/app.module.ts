// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent }  from './app.component';
// import { RequestsComponent }  from './requests.component';
// import { NewStylistComponent }  from './new-stylist.component';

// @NgModule({
//   imports:      [ BrowserModule ],
//   // declarations: [ AppComponent, RequestsComponent ],
//   declarations: [ AppComponent, RequestsComponent, NewStylistComponent ],
//   // providers: 	[ HeroService ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { HeroData } from './hero-data';
import { HeroListComponent }        from './toh/hero-list.component';
import { HeroListPromiseComponent } from './toh/hero-list.component.promise';

import { WikiComponent }      from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import { RequestsComponent }  from './requests.component';
import { NewStylistComponent }  from './new-stylist.component';


import { routing }        from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing, HttpModule, JsonpModule ],
     providers: [
				    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
				    { provide: SEED_DATA,  useClass: HeroData }                // in-mem server data
				  ],
    declarations: [ AppComponent, RequestsComponent,  NewStylistComponent, HeroListComponent,
    				HeroListPromiseComponent,
    				WikiComponent,
    				WikiSmartComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }