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

        /**
         *
         * @param {string} nome
         * @param {sap.ui.model.json.JSONModel} modelo
         * @returns {sap.ui.model.json.JSONModel}
         */
        modelo: function (nome, modelo) {
            let view = this.getView();
            if (modelo) view.setModel(modelo, nome);
            return view.getModel(nome);
        },

        obterTextoI18N(chaveI18N) {
            const MODELO_I18N = 'i18n';
            const recursos_i18n = this.getOwnerComponent().getModel(MODELO_I18N).getResourceBundle();
            return recursos_i18n.getText(chaveI18N);
        },

        /**
         * @param {string}
         * @param {Object} [parameters]
         * @returns {routeName sap.ui.core.routing.Router}
         */
        navegarPara: function (routeName, parameters = null) {
            return this
                .getRouter()
                .navTo(routeName, parameters);
        },
    });
});