sap.ui.define([
], function () {
    'use strict';

    const URL = '/api/Posts';

    return {
        obterTodos: function (assunto, ordem, localizacao) {
            return [
                {
                    imagem: '',
                    comunidade: 'algo.com',
                    titulo: "Titulo exemplo",
                    texto: "<strong>Lorem ipsum dolor sit amet</strong>, <em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <a href='http://www.sap.com'>sed diam voluptua</a>. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <strong>tempor invidunt ut labore et dolore magna</strong> aliquyam erat, sed diam voluptua. <em>At vero eos et accusam et justo</em> duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiamnonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <u>sed diam nonumy eirmod tempor invidunt ut labore</u> et dolore magna aliquyam erat, sed diam voluptua. <strong>At vero eos et accusam</strong> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <a href='//www.sap.com'>tempor invidunt</a> ut labore et dolore magna aliquyam erat, sed diam voluptua. <em>At vero eos et accusam</em> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: '',
                    comunidade: 'algo.com',
                    titulo: "Titulo exemplo",
                    texto: "<strong>Lorem ipsum dolor sit amet</strong>, <em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor ",
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: '',
                    comunidade: 'algo.com',
                    titulo: "Titulo exemplo",
                    texto: "<strong>Lorem ipsum dolor sit amet</strong>",
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: 'https://www.designi.com.br/images/preview/12063890-m.jpg',
                    comunidade: 'algo.com',
                    titulo: 'HOHOHO',
                    texto: '',
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                    carrossel: [
                        {
                            imagem: 'https://www.designi.com.br/images/preview/12063890-m.jpg',
                        },
                        {
                            imagem: 'https://brunogomesdias.com.br/wp-content/uploads/2023/06/banner-links-ia-desktop.png',
                        },
                        {
                            imagem: 'https://www.correiodopovo.com.br/image/contentid/policy:1.928624:1679261391/disco.jpg?a=3%3A2&$p$a=8e3bc72',
                        }
                    ]
                },
            ]
        },

        obterPostsEmAlta: function () {
            return [
                {
                    imagem: 'https://www.designi.com.br/images/preview/12063890-m.jpg',
                    comunidade: 'algo.com',
                    titulo: 'HOHOHO',
                    texto: 'Papai Noel promete ps5 mas entrega polistation',
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: 'https://brunogomesdias.com.br/wp-content/uploads/2023/06/banner-links-ia-desktop.png',
                    comunidade: 'iaTranqueira.com.br',
                    titulo: '010101110',
                    texto: 'IA tenta aprender programação, mas desiste e vira servente de pedreiro',
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: 'https://www.correiodopovo.com.br/image/contentid/policy:1.928624:1679261391/disco.jpg?a=3%3A2&$p$a=8e3bc72',
                    comunidade: 'ipirangaGO.com.br',
                    titulo: 'AUUU',
                    texto: 'Michael Jackson está vivo e mora Iranduba - AM',
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: 'https://s2.glbimg.com/D4_cBRL-2z1oz57dORzDw2Iu9Sw=/s.glbimg.com/jo/g1/f/original/2013/02/05/033518870-fmm00.jpg',
                    comunidade: 'mundoAnimal.com',
                    titulo: 'Hey Taxi!!',
                    texto: 'Passaro ferido pede ajuda a jacaré para atravessar rio',
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: 'https://i.ytimg.com/vi/XiH_3p1HBwU/maxresdefault.jpg',
                    comunidade: 'mundoAnimal.com',
                    titulo: 'O mundo da voltas',
                    texto: 'Castor herói gasta tudo que tem em pau brasil e fica pobre',
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                },
                {
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQPxibhUGyfRndtJyyxtZCRgXFMfj-AsKug4E4Nx2nQ&s',
                    comunidade: 'mundoAnimal.com',
                    titulo: 'O fracasso...',
                    texto: 'Veja como estão os atores de Crepusculo',
                    numeroDeLikes: "15 mil",
                    numeroDeComentarios: "10 mil",
                    autor: "George Washington",
                    avatar: "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    tempoDecorrido: "21",
                    dataDePublicacao: "March 04 2013",
                }
            ]
        }
    };
});