import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';
const appRoutes: Routes = [
{
  path: '',
  redirectTo: '/requests'
},
  { path: 'requests', component: RequestsComponent }
];
// export const appRoutingProviders: any[] = [
// ];
export const routing = RouterModule.forRoot(appRoutes);