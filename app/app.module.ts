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
import { RequestsComponent }  from './requests.component';
import { NewStylistComponent }  from './new-stylist.component';

import { routing }        from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, RequestsComponent,  NewStylistComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }