System.register(["@angular/core", "@angular/common", "./articles.component", "./articles.routes"], function(exports_1, context_1) {
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
    var core_1, common_1, articles_component_1, articles_routes_1;
    var ArticlesModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (articles_component_1_1) {
                articles_component_1 = articles_component_1_1;
            },
            function (articles_routes_1_1) {
                articles_routes_1 = articles_routes_1_1;
            }],
        execute: function() {
            ArticlesModule = (function () {
                function ArticlesModule() {
                }
                ArticlesModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, articles_routes_1.default],
                        declarations: [articles_component_1.ArticlesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticlesModule);
                return ArticlesModule;
            }());
            exports_1("default", ArticlesModule);
        }
    }
});
//# sourceMappingURL=articles.module.js.map