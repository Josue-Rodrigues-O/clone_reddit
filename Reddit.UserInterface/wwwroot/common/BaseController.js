sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "reddit/model/formatter"
], function (Controller, formatter) {
    "use strict";

    const NAMESPACE = "reddit.common.BaseController"
    return Controller.extend(NAMESPACE, {
        formatter: formatter,

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