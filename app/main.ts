/// <reference path="../typings/browser.d.ts"/>
///<reference path="../typings/globals/hammerjs/index.d.ts"/>

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {SeiModule} from "./module";
//import { ConfigBean } from './lib/beans/config/config.bean';

//console.log('main.ts: toServer=' + ConfigBean.toServer);

platformBrowserDynamic().bootstrapModule(SeiModule);
