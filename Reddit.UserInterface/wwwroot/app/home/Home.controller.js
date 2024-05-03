sap.ui.define([
    "reddit/common/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/Menu",
    "sap/m/MenuItem"
], function (BaseControler, JSONModel, Menu, MenuItem) {
    "use strict";

    const NAMESPACE = "reddit.app.home.Home";

    return BaseControler.extend(NAMESPACE, {
        onInit: function () {
            const rotaListagem = "home";
            this.vincularRota(rotaListagem, this._aoCoincidirRota);
        },

        _aoCoincidirRota: function () {
            this._definirDadosImagens()
        },

        _definirDadosImagens: function () {
            const svgImagemLogo = sap.ui.require.toUrl("reddit/resources/images/imagem_logo.svg");
            const svgTextoLogo = sap.ui.require.toUrl("reddit/resources/images/texto_logo.svg");
            const model = {
                svgImagemLogo: svgImagemLogo,
                svgTextoLogo: svgTextoLogo
            }
            this.getView().setModel(new JSONModel(model), 'images');
        },

        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();

            this._setToggleButtonTooltip(bSideExpanded);

            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },
    });
});