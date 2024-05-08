sap.ui.define([

], function () {
    'use strict';

    return {
        obterTextoI18N(chaveI18N) {
            const MODELO_I18N = 'i18n';
            const recursos_i18n = this.getOwnerComponent().getModel(MODELO_I18N).getResourceBundle();
            return recursos_i18n.getText(chaveI18N);
        },
    }
});