System.register(['@angular/core', '@angular/platform-browser', '@angular/http', '@angular/router', './routing', './views/contacts/test'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, http_1, router_1, routing_1, test_1;
    var MATERIAL_MODULES, SeiModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routing_1_1) {
                routing_1 = routing_1_1;
            },
            function (test_1_1) {
                test_1 = test_1_1;
            }],
        execute: function() {
            // import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
            MATERIAL_MODULES = [];
            SeiModule = (function () {
                function SeiModule(_appRef) {
                    this._appRef = _appRef;
                }
                SeiModule.prototype.ngDoBootstrap = function () {
                    this._appRef.bootstrap(test_1.SingleDemoComponent);
                };
                SeiModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            MATERIAL_MODULES,
                            router_1.RouterModule,
                            routing_1.routing
                        ],
                        exports: [
                            MATERIAL_MODULES
                        ],
                        providers: [
                            routing_1.appRoutingProviders,
                        ],
                        declarations: [
                            //    SeiApp,
                            test_1.SingleDemoComponent,
                        ],
                        entryComponents: [],
                    }), 
                    __metadata('design:paramtypes', [core_1.ApplicationRef])
                ], SeiModule);
                return SeiModule;
            }());
            exports_1("SeiModule", SeiModule);
        }
    }
});
//# sourceMappingURL=module.js.map