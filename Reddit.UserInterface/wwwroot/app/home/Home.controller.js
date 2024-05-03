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
            this._definirDadosMenuLateral()
        },

        _definirDadosImagens: function () {
            const svgLogo = sap.ui.require.toUrl("reddit/resources/images/reddit_logo.svg");
            const model = {
                svgLogo: svgLogo,
            }
            this.getView().setModel(new JSONModel(model), 'images');
        },

        _definirDadosMenuLateral: function () {
            const dados = {
                "selectedKey": "page2",
                "menuLateral": [
                    {
                        "title": "Página inicial",
                        "icon": "sap-icon://employee",
                        "key": "root1",
                        "enabled": true,
                    },
                    {
                        "title": "Popular",
                        "icon": "sap-icon://employee",
                        "key": "root1",
                        "enabled": true,
                    },
                    {
                        "title": "Jogos",
                        "icon": "sap-icon://employee",
                        "key": "root1",
                        "enabled": true,
                        "expanded": false,
                        "items": [
                            {
                                "title": "Jogos",
                                "icon": "sap-icon://employee",
                                "key": "root1"
                            },
                        ]
                    },
                    {
                        "title": "Esportes",
                        "icon": "sap-icon://employee",
                        "key": "root1",
                        "enabled": true,
                        "expanded": false,
                        "items": [
                            {
                                "title": "Jogos",
                                "icon": "sap-icon://employee",
                                "key": "root1"
                            },
                        ]
                    },
                    {
                        "title": "Negócios",
                        "icon": "sap-icon://employee",
                        "key": "root1",
                        "enabled": true,
                        "expanded": false,
                        "items": [
                            {
                                "title": "Jogos",
                                "icon": "sap-icon://employee",
                                "key": "root1"
                            },
                        ]
                    },
                ],
                "assuntos": [
                    {
                        "title": "Esportes",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Negócios",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Cripto",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Televisão",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Celebridades",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                ],
                "recursos": [
                    {
                        "title": "Sobre o Reddit",
                        "icon": "sap-icon://employee",
                        "key": "root1",
                    },
                    {
                        "title": "Anuncie",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Ajuda",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Blog",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Carreiras",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Imprensa",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    }
                ],
                "rodape": [
                    {
                        "title": "Política de Conteúdo",
                        "icon": "sap-icon://employee",
                        "key": "root1",
                    },
                    {
                        "title": "Política de Privacidade",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Contrato de Usuário",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    }
                ],
                "fixedNavigation": [
                    {
                        "title": "Fixed Item 1",
                        "icon": "sap-icon://employee"
                    },
                    {
                        "title": "Fixed Item 2",
                        "icon": "sap-icon://building"
                    },
                    {
                        "title": "Fixed Item 3",
                        "icon": "sap-icon://card"
                    }
                ],
                "headerItems": [
                    {
                        "text": "File"
                    },
                    {
                        "text": "Edit"
                    },
                    {
                        "text": "View"
                    },
                    {
                        "text": "Settings"
                    },
                    {
                        "text": "Help"
                    }
                ]
            }
            this.getView().setModel(new JSONModel(dados), 'dados');
        },

        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();

            this._setToggleButtonTooltip(bSideExpanded);

            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },
    });
});