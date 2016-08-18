// import { provideRouter, RouterConfig } from '@angular/router';

// import { RequestsComponent } from './requests.component';
// import { NewStylistComponent } from './new-stylist.component';

// // Route Configuration
// export const routes: RouterConfig = [
//   {
//     path: '',
//     redirectTo: '/requests',
//     pathMatch: 'full'
//   },
//   { path: 'requests', component: RequestsComponent },
//   { path: 'new-stylist', component: NewStylistComponent }
// ];

// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';
import { NewStylistComponent } from './new-stylist.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/requests',
		pathMatch: 'full'
	},
	{ path: 'requests', component: RequestsComponent },
	{ path: 'new-stylist', component: NewStylistComponent }
];

export const routing = RouterModule.forRoot(routes);