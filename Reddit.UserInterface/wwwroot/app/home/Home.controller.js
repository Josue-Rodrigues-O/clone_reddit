sap.ui.define([
    "reddit/common/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/Menu",
    "sap/m/MenuItem",
    "reddit/repositories/RepositorioPosts",
    "reddit/repositories/RepositorioComunidades",
    'sap/ui/core/Fragment',
], function (BaseControler, JSONModel, Menu, MenuItem, RepositorioPosts, RepositorioComunidades, Fragment) {
    "use strict";

    const PARAMETRO_ITEM = "item";
    const NAMESPACE = "reddit.app.home.Home";

    return BaseControler.extend(NAMESPACE, {
        dialogoSignIn: null,
        dialogoSignUp: null,

        //#region Eventos
        onInit: function () {
            const rotaListagem = 'home';
            this.vincularRota(rotaListagem, this._aoCoincidirRota);
        },

        _aoCoincidirRota: function () {
            this._definirDadosImagensDoSite();
            this._definirDadosMenuLateral();
            this._definirDadosComunidades();
            this._definirDadosPosts();
            this._definirDadosDaTela();
            this._definirDadosDoCarrossel();
        },

        aoSelecionarUmItemDoMenuLateral: function (evento) {
            const idConteudoPrincipal = "idConteudoPrincipal";
            var item = evento.getParameter(PARAMETRO_ITEM);
            this.byId(idConteudoPrincipal).to(this.getView().createId(item.getKey()));
        },

        aoClicarNaAbaComSubMenus: function (evento) {
            var novoValor = !evento.getParameter(PARAMETRO_ITEM).getExpanded();
            evento.getParameter(PARAMETRO_ITEM).setExpanded(novoValor);
        },

        onPress: function () {
            var oView = this.getView(),
                oButton = oView.byId("button");

            if (!this._oMenuFragment) {
                this._oMenuFragment = Fragment.load({
                    id: oView.getId(),
                    name: "reddit.app.home.fragments.MenuBarraSuperior",
                    controller: this
                }).then(function (oMenu) {
                    oMenu.openBy(oButton);
                    this._oMenuFragment = oMenu;
                    return this._oMenuFragment;
                }.bind(this));
            } else {
                this._oMenuFragment.openBy(oButton);
            }
        },

        onMenuAction: function (oEvent) {
            var oItem = oEvent.getParameter("item"),
                sItemPath = "";

            while (oItem instanceof MenuItem) {
                sItemPath = oItem.getText() + " > " + sItemPath;
                oItem = oItem.getParent();
            }

            sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

            MessageToast.show("Action triggered on item: " + sItemPath);
        },

        aoClicarEmEntrar: async function () {
            this._criarEAbrirModal('dialogoSignIn', 'reddit.app.home.fragments.sign-in.Sign-in');
        },

        aoClicarEmCadastrar: async function () {
            this._criarEAbrirModal('dialogoSignUp', 'reddit.app.home.fragments.sign-up.Sign-up');
        },

        aoClicarEmAnuncieNoReddit: function () {
            console.log("aoClicarEmAnuncieNoReddit");
        },

        aoClicarEmComprarAvataresColecionaveis: function () {
            console.log("aoClicarEmComprarAvataresColecionaveis");
        },

        aoClicarEmFecharModalSignIn: function () {
            this.dialogoSignIn.then((dialogo) => dialogo.close())
        },

        aoClicarEmFecharModalSignUp: function () {
            this.dialogoSignUp.then((dialogo) => dialogo.close())
        },
        //#endregion

        //#region Modelos
        _modeloPosts: function (dados) {
            return dados
                ? this.modelo("posts", new JSONModel(dados))
                : this.modelo("posts");
        },

        _modeloImagensDoSite: function (dados) {
            return dados
                ? this.modelo("images", new JSONModel(dados))
                : this.modelo("images");
        },

        _modeloMenuLateral: function (dados) {
            return dados
                ? this.modelo("menuLateral", new JSONModel(dados))
                : this.modelo("menuLateral");
        },

        _modeloComunidadesPopulares: function (dados) {
            return dados
                ? this.modelo("comunidadesPopulares", new JSONModel(dados))
                : this.modelo("comunidadesPopulares");
        },

        _modeloDadosDaTela: function (dados) {
            return dados
                ? this.modelo("dadosDaTela", new JSONModel(dados))
                : this.modelo("dadosDaTela");
        },

        _modeloCarrossel: function (dados) {
            return dados
                ? this.modelo("carrossel", new JSONModel(dados))
                : this.modelo("carrossel");
        },
        //#endregion

        //#region Setters
        _definirDadosPosts: function (assunto, ordem, localizacao) {
            this._obterPosts(assunto, ordem, localizacao)
                .then(response => response.json())
                .then(dados => this._modeloPosts(dados));
        },

        _definirDadosImagensDoSite: function () {
            const dados = {
                svgImagemLogo: sap.ui.require.toUrl("reddit/resources/images/imagem_logo.svg"),
                svgTextoLogo: sap.ui.require.toUrl("reddit/resources/images/texto_logo.svg"),
                pngBannerTeste: sap.ui.require.toUrl("reddit/resources/images/banner_teste.jpg"),
                svgIconApple: sap.ui.require.toUrl("reddit/resources/images/icon_apple.svg")
            };

            this._modeloImagensDoSite(dados);
        },

        _definirDadosMenuLateral: function () {
            const dados = {
                selectedKey: "popular",
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
            };
            this._modeloMenuLateral(dados);
        },

        _definirDadosComunidades: function (filtro) {
            const dados = this._obterComunidades(filtro);
            this._modeloComunidadesPopulares(dados);
        },

        _definirDadosDaTela: function () {
            const dados = {
                filtroOrdenar: {
                    text: this.obterTextoI18N('filtroOrdenarPor')
                },
                filtroLocalizacao: {
                    text: this.obterTextoI18N('filtoLocalizacao')
                },
                modeloPosts: {
                    icon: 'sap-icon://header'
                }
            };
            this._modeloDadosDaTela(dados);
        },

        _definirDadosDoCarrossel: function () {
            this._obterAnuncios()
                .then(response => response.json())
                .then(dados => this._modeloCarrossel(dados));
        },
        //#endregion

        //#region Realiza requisições ao servidor
        _obterPosts: function (assunto, ordem, localizacao) {
            return RepositorioPosts.obterTodos();
        },

        _obterComunidades: function (filtro) {
            return RepositorioComunidades.obterTodos();
        },

        _obterAnuncios: function (filtro) {
            return RepositorioPosts.obterPostsEmAlta();
        },
        //#endregion

        //#region Métodos privados
        _criarEAbrirModal: async function (modalObjectName, modalXMLName) {
            let modalExiste = Boolean(this[modalObjectName])
            let modalFechado;

            if (modalExiste) {
                await this[modalObjectName]
                    .then((modal) => {
                        if (modal.isDestroyed() != undefined) {
                            return modalFechado = modal.isDestroyed()
                        }
                        return modalFechado = modal.isOpen()
                    });
            }

            if (!modalExiste || modalFechado)
                this[modalObjectName] = this.loadFragment({
                    name: modalXMLName
                });

            this[modalObjectName].then((dialogo) => dialogo.open());
        },
        //#endregion
    });
});