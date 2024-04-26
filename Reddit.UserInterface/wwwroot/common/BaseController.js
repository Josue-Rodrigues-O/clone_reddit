sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    const NAMESPACE = "reddit.common.BaseController"
    return Controller.extend(NAMESPACE, {
        /**
         * @param {string} routeName
         * @param {function} func
         */
        vincularRota: function (routeName, func) {
            const router = this.getRouter();

            if (routeName) {
                router
                    .getRoute(routeName)
                    .attachPatternMatched(func, this);
            } else {
                router.attachRouteMatched(func, this);
            }
        },

        getRouter: function () {
            return this
                .getOwnerComponent()
                .getRouter();
        },
    });
});