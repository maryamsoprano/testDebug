import { Routes, RouterModule }   from '@angular/router';

  import { SingleDemoComponent } from './views/contacts/test';



const appRoutes: Routes = [
  { path: '', redirectTo: 'contacts', terminal: true },
  { path: 'contacts', component: SingleDemoComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);