System.register(["@angular/router", "./home.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1;
    var routes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', component: home_component_1.HomeComponent }
            ];
            exports_1("default",router_1.RouterModule.forChild(routes));
        }
    }
});
//# sourceMappingURL=home.routes.js.map