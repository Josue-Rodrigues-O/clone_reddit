sap.ui.define([
], function () {
    'use strict';

    const URL = '/api/Posts';

    return {
        obterTodos: function (filtro) {
            return [
                {
                    logo: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png',
                    nome: 'r/AskReddit',
                    numeroDeMembros: '3.046.177 membros',
                },
                {
                    logo: 'https://styles.redditmedia.com/t5_2rfxx/styles/communityIcon_9yj66cjf8oq61.png',
                    nome: 'r/leagueoflegends',
                    numeroDeMembros: '3.046.177 membros',
                },
                {
                    logo: 'https://styles.redditmedia.com/t5_2xinb/styles/communityIcon_qqtvyeb0bj221.png',
                    nome: 'r/OutOfTheLoop',
                    numeroDeMembros: '3.046.177 membros',
                },
                {
                    logo: 'https://styles.redditmedia.com/t5_388p4/styles/communityIcon_1xjv62tivxy61.png',
                    nome: 'r/discordapp',
                    numeroDeMembros: '3.046.177 membros',
                },
                {
                    logo: 'https://styles.redditmedia.com/t5_2s0fe/styles/communityIcon_2cbkzwfs6kr21.png',
                    nome: 'r/Twitch',
                    numeroDeMembros: '3.046.177 membros',
                },
            ]
        }
    };
});