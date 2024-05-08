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
            const svgImagemLogo = sap.ui.require.toUrl("reddit/resources/images/imagem_logo.svg");
            const svgTextoLogo = sap.ui.require.toUrl("reddit/resources/images/texto_logo.svg");
            const model = {
                svgImagemLogo: svgImagemLogo,
                svgTextoLogo: svgTextoLogo
            }
            this.getView().setModel(new JSONModel(model), 'images');
        },

        _definirDadosMenuLateral: function () {
            const model = {
                selectedKey: "paginaInicial",
                paginaInicial: {
                    key: "paginaInicial",
                    text: "MenuLateral.PaginaInicial",
                    icon: "sap-icon://home"
                },
                popular: {
                    key: "popular",
                    text: "MenuLateral.Popular",
                    icon: "sap-icon://business-objects-explorer"
                },
                jogos: {
                    key: "jogos",
                    text: "MenuLateral.Jogos",
                    icon: "sap-icon://badge",
                    expanded: false,
                    items: [
                        {
                            key: "item_1",
                            text: "Valhein",
                        },
                        {
                            key: "item_2",
                            text: "Genshin Impact",
                        },
                        {
                            key: "item_3",
                            text: "Minecraft",
                        },
                        {
                            key: "item_4",
                            text: "Pokimane",
                        },
                        {
                            key: "item_5",
                            text: "Halo Infinite",
                        },
                        {
                            key: "item_6",
                            text: "Call of Duty: Warzone",
                        },
                        {
                            key: "item_7",
                            text: "Path of Exile",
                        },
                        {
                            key: "item_8",
                            text: "Hollow Knight: Silksong",
                        },
                        {
                            key: "item_9",
                            text: "Escape from Tarkov",
                        },
                        {
                            key: "item_10",
                            text: "Watch Dogs: Legion",
                        },
                    ]
                },
                esportes: {
                    key: "esportes",
                    text: "MenuLateral.Esportes",
                    icon: "sap-icon://competitor",
                    expanded: false,
                    items: [
                        {
                            key: "item_11",
                            text: "NFL",
                        },
                        {
                            key: "item_12",
                            text: "NBA",
                        },
                        {
                            key: "item_13",
                            text: "Megan Anderson",
                        },
                        {
                            key: "item_14",
                            text: "Atlanta Hawks",
                        },
                        {
                            key: "item_15",
                            text: "Los Angeles Lakers",
                        },
                        {
                            key: "item_16",
                            text: "Boston Celtics",
                        },
                        {
                            key: "item_17",
                            text: "Arsenal F.C",
                        },
                        {
                            key: "item_18",
                            text: "Philadelphia 76ers",
                        },
                        {
                            key: "item_19",
                            text: "Premier League",
                        },
                        {
                            key: "item_20",
                            text: "UFC",
                        },
                    ]
                },
                negocios: {
                    key: "negocios",
                    text: "MenuLateral.Negocios",
                    icon: "sap-icon://tools-opportunity",
                    expanded: false,
                    items: [
                        {
                            key: "item_21",
                            text: "GameStop",
                        },
                        {
                            key: "item_22",
                            text: "Moderna",
                        },
                        {
                            key: "item_23",
                            text: "Pfizer",
                        },
                        {
                            key: "item_24",
                            text: "Johnson &amp; Johnson",
                        },
                        {
                            key: "item_25",
                            text: "AstraZeneca",
                        },
                        {
                            key: "item_26",
                            text: "Best Buy",
                        },
                        {
                            key: "item_27",
                            text: "Novavax",
                        },
                        {
                            key: "item_28",
                            text: "SpaceX",
                        },
                        {
                            key: "item_29",
                            text: "Tesla",
                        }
                    ]
                },
                cripto: {
                    key: "cripto",
                    text: "MenuLateral.Cripto",
                    icon: "sap-icon://business-objects-experience",
                    expanded: false,
                    items: [
                        {
                            key: "item_30",
                            text: "Cardano",
                        },
                        {
                            key: "item_31",
                            text: "Dogecoin",
                        },
                        {
                            key: "item_32",
                            text: "Algorand",
                        },
                        {
                            key: "item_33",
                            text: "Bitcoin",
                        },
                        {
                            key: "item_34",
                            text: "Litecoin",
                        },
                        {
                            key: "item_35",
                            text: "Basic Attantion Token",
                        },
                        {
                            key: "item_36",
                            text: "Bitcoin Cash",
                        },
                    ]
                },
                televisao: {
                    key: "televisao",
                    text: "MenuLateral.Televisao",
                    icon: "sap-icon://sys-monitor",
                    expanded: false,
                    items: [
                        {
                            key: "item_37",
                            text: "The Real Housewives of Atlanta",
                        },
                        {
                            key: "item_38",
                            text: "The Bachelor",
                        },
                        {
                            key: "item_39",
                            text: "sister Wives",
                        },
                        {
                            key: "item_40",
                            text: "90 Dias para Casar",
                        },
                        {
                            key: "item_41",
                            text: "Wife Swap",
                        },
                        {
                            key: "item_42",
                            text: "The Amazing Race Autralia",
                        },
                        {
                            key: "item_43",
                            text: "Casamento à Primeira Vista",
                        },
                        {
                            key: "item_44",
                            text: "The Real Housewives of Dallas",
                        },
                        {
                            key: "item_45",
                            text: "Quilos Mortais",
                        },
                        {
                            key: "item_46",
                            text: "Last Week Tonight with John Oliver",
                        },
                    ]
                },
                celebridades: {
                    key: "celebridades",
                    text: "MenuLateral.Celebridades",
                    icon: "sap-icon://ai",
                    expanded: false,
                    items: [
                        {
                            key: "item_47",
                            text: "Kim Kardashian",
                        },
                        {
                            key: "item_48",
                            text: "Doja Cat",
                        },
                        {
                            key: "item_49",
                            text: "Iggy Azalea",
                        },
                        {
                            key: "item_50",
                            text: "Anya Taylor-Joy",
                        },
                        {
                            key: "item_51",
                            text: "Jamie Lee Curtis",
                        },
                        {
                            key: "item_52",
                            text: "Natalie Portman",
                        },
                        {
                            key: "item_53",
                            text: "Henry Cavil",
                        },
                        {
                            key: "item_54",
                            text: "Millie Bobby Brown",
                        },
                        {
                            key: "item_55",
                            text: "Tom Hilddleston",
                        },
                        {
                            key: "item_56",
                            text: "Keanu Reeves",
                        },
                    ]
                },
                sobreOReddit: {
                    key: "sobreOReddit",
                    text: "MenuLateral.SobreOReddit",
                    icon: "sap-icon://hint"
                },
                anuncie: {
                    key: "anuncie",
                    text: "MenuLateral.Anuncie",
                    icon: "sap-icon://sound"
                },
                ajuda: {
                    key: "ajuda",
                    text: "MenuLateral.Ajuda",
                    icon: "sap-icon://headset"
                },
                blog: {
                    key: "blog",
                    text: "MenuLateral.Blog",
                    icon: "sap-icon://e-learning"
                },
                carreiras: {
                    key: "carreiras",
                    text: "MenuLateral.Carreiras",
                    icon: "sap-icon://business-one"
                },
                imprensa: {
                    key: "imprensa",
                    text: "MenuLateral.Imprensa",
                    icon: "sap-icon://doc-attachment"
                },
                comunidades: {
                    key: "comunidades",
                    text: "MenuLateral.Comunidades",
                    icon: "sap-icon://group"
                },
                oMelhorDoReddit: {
                    key: "oMelhorDoReddit",
                    text: "MenuLateral.OMelhorDoReddit",
                    icon: "sap-icon://bar-chart"
                },
                assuntos: {
                    key: "assuntos",
                    text: "MenuLateral.Assuntos",
                    icon: "sap-icon://business-by-design"
                },
                politicaDeConteudo: {
                    key: "politicaDeConteudo",
                    text: "MenuLateral.PoliticaDeConteudo",
                    icon: "sap-icon://dimension"
                },
                politicaDePrivacidade: {
                    key: "politicaDePrivacidade",
                    text: "MenuLateral.PoliticaDePrivacidade",
                    icon: "sap-icon://compare"
                },
                contratoDeUsuario: {
                    key: "contratoDeUsuario",
                    text: "MenuLateral.ContratoDeUsuario",
                    icon: "sap-icon://customer-order-entry"
                }
            }

            this.getView().setModel(new JSONModel(model), 'menuLateral')
        }
    });
});