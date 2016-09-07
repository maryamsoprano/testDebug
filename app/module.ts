import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';


//import { MdDialog } from "ng2-material/components/dialog/dialog";

//import {MdDialogModule} from '@angular2-material/dialog/dialog';


import { routing, appRoutingProviders } from './routing';

// import { ContactsView } from './views/contacts/contacts';
import { SingleDemoComponent } from './views/contacts/test';



// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';



const MATERIAL_MODULES = [

];

@NgModule({
  imports: [
    BrowserModule,

    HttpModule,
    MATERIAL_MODULES,
    RouterModule,
    routing
  ],
  exports: [
    MATERIAL_MODULES
  ],
  providers: [
    appRoutingProviders,


  ],
  declarations: [
//    SeiApp,

    SingleDemoComponent,
  ],
  entryComponents: [

  ],
})
export class SeiModule {
  constructor(private _appRef: ApplicationRef) {
  }

  ngDoBootstrap() {
    this._appRef.bootstrap(SingleDemoComponent);
  }
}