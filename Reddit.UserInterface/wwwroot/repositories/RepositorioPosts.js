sap.ui.define([
], function () {
    'use strict';

    const URL = '/api/Posts';
    
    return {
        obterTodos: function (assunto, ordem, localizacao) {
            return [
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo",
                    "text": "<strong>Lorem ipsum dolor sit amet</strong>, <em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <a href='http://www.sap.com'>sed diam voluptua</a>. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <strong>tempor invidunt ut labore et dolore magna</strong> aliquyam erat, sed diam voluptua. <em>At vero eos et accusam et justo</em> duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiamnonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <u>sed diam nonumy eirmod tempor invidunt ut labore</u> et dolore magna aliquyam erat, sed diam voluptua. <strong>At vero eos et accusam</strong> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <a href='//www.sap.com'>tempor invidunt</a> ut labore et dolore magna aliquyam erat, sed diam voluptua. <em>At vero eos et accusam</em> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                    "actions": [
                        {
                            "Text": "Delete",
                            "Icon": "sap-icon://delete",
                            "Key": "delete"
                        },
                        {
                            "Text": "Share",
                            "Icon": "sap-icon://share-2",
                            "Key": "share"
                        },
                        {
                            "Text": "Edit",
                            "Icon": "sap-icon://edit",
                            "Key": "edit"
                        }
                    ]
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
                {
                    "numbersLikes": "15 mil",
                    "numberComments": "10 mil",
                    "sender": "George Washington",
                    "avatar": "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    "time": "21",
                    "info": "Reply",
                    "timestamp": "March 04 2013",
                    "title": "Titulo exemplo 2",
                    "text": "Lorem ipsum &gt;dolor ~~ggggg^1~~ sit <a href='http://www.sap.com'></a>, consetetur sadipscing elitr, <em>sed diam</em> nonumy <strong>eirmod tempor</strong> invidunt ut labore"
                },
            ]
        }
    };
});