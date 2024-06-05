sap.ui.define([

], function () {
    'use strict';

    return {
        obterTextoI18N: function (chaveI18N) {
            const MODELO_I18N = 'i18n';
            const recursos_i18n = this.getOwnerComponent().getModel(MODELO_I18N).getResourceBundle();
            return recursos_i18n.getText(chaveI18N);
        },

        obterConfiguracaoDaImagem: function (url) {
            var img = new Image();
            img.src = url;
            if (img.width < img.height) {
                return {
                    imagem: url,
                    width: '',
                    minWidth: '',
                    height: '100%',
                    minHeight: '100%',
                    alignSelf: 'Stretch'
                };
            }
            return {
                imagem: url,
                width: '100%',
                minWidth: '100%',
                height: '',
                minHeight: '',
                alignSelf: 'Auto'
            };
        },
    }
});