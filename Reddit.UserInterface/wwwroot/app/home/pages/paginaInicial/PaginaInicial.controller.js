sap.ui.define([
    "reddit/app/home/Home.controller"
], function (Home) {
    "use strict";

    const NAMESPACE = "reddit.app.home.pages.paginaInicial.PaginaInicial";

    return Home.extend(NAMESPACE, {

        aoClicarEmPostModeloCartao: function (evento) {
            this._modeloDadosDaTela().setProperty('/modeloPosts/icon', 'sap-icon://header');
        },

        aoClicarEmPostModeloCompactada: function (evento) {
            this._modeloDadosDaTela().setProperty('/modeloPosts/icon', 'sap-icon://filter-fields');
        },
    });
});