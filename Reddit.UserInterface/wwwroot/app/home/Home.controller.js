sap.ui.define([
    "reddit/common/BaseController"
], function (BaseControler) {
    "use strict";

    const NAMESPACE = "reddit.app.home.Home";

    return BaseControler.extend(NAMESPACE, {
        onInit: function () {
            const rotaListagem = "home";
            this.vincularRota(rotaListagem, this._aoCoincidirRota);
        },

        _aoCoincidirRota: function () {
            console.log("hello!");
        }
    });
});