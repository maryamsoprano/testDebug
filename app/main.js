/// <reference path="../typings/browser.d.ts"/>
///<reference path="../typings/globals/hammerjs/index.d.ts"/>
System.register(['@angular/platform-browser-dynamic', "./module"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (module_1_1) {
                module_1 = module_1_1;
            }],
        execute: function() {
            //import { ConfigBean } from './lib/beans/config/config.bean';
            //console.log('main.ts: toServer=' + ConfigBean.toServer);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(module_1.SeiModule);
        }
    }
});
//# sourceMappingURL=main.js.map