sap.ui.define([
    "reddit/app/home/Home.controller"
], function (Home) {
    "use strict";

    const NAMESPACE = "reddit.app.home.pages.popular.Popular";

    return Home.extend(NAMESPACE, {

        aoClicarEmPostModeloCartao: function (evento) {
            this._modeloDadosDaTela().setProperty('/modeloPosts/icon', 'sap-icon://header');
        },

        aoClicarEmPostModeloCompactada: function (evento) {
            this._modeloDadosDaTela().setProperty('/modeloPosts/icon', 'sap-icon://filter-fields');
        },
        
        aoClicarEmOrdenarPor: function (evento) {
            const novoTexto = evento.getSource().getProperty('text');
            this._modeloDadosDaTela().setProperty('/filtroOrdenar/text', novoTexto)
        },
        
        aoClicarEmOrdenarPorLocalizaca: function (evento) {
            const novoTexto = evento.getSource().getProperty('text');
            this._modeloDadosDaTela().setProperty('/filtroLocalizacao/text', novoTexto)
        },
    });
});