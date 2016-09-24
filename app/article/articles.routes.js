System.register(["@angular/router", "./articles.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, articles_component_1;
    var routes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_component_1_1) {
                articles_component_1 = articles_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', component: articles_component_1.ArticlesComponent }
            ];
            exports_1("default",router_1.RouterModule.forChild(routes));
        }
    }
});
//# sourceMappingURL=articles.routes.js.map