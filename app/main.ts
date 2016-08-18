// import {bootstrap} from '@angular/platform-browser-dynamic';
// import {AppComponent} from './app.component';
// import { APP_ROUTER_PROVIDERS } from './app.routing';

// bootstrap(AppComponent, [
//   APP_ROUTER_PROVIDERS
// ]);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);