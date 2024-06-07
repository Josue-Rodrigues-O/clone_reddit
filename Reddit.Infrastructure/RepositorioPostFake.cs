using Reddit.Domain.Interfaces;
using Reddit.Domain.Modelos;

namespace Reddit.Infrastructure
{
    public class RepositorioPostFake : IRepositorioPost
    {
        public void Atualizar(Post post)
        {
            throw new NotImplementedException();
        }

        public void Incluir(Post post)
        {
            throw new NotImplementedException();
        }

        public Post ObterPorId(string id)
        {
            throw new NotImplementedException();
        }

        public List<Post> ObterTodos()
        {
            return new()
            {
                new()
                {
                    Id = "Post 1",
                    Autor = "George Washington",
                    Avatar = "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    Titulo = "Titulo exemplo",
                    Comunidade = "algo.com",
                    Texto = "<strong>Lorem ipsum dolor sit amet</strong>, <em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <a href='http://www.sap.com'>sed diam voluptua</a>. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <strong>tempor invidunt ut labore et dolore magna</strong> aliquyam erat, sed diam voluptua. <em>At vero eos et accusam et justo</em> duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiamnonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <u>sed diam nonumy eirmod tempor invidunt ut labore</u> et dolore magna aliquyam erat, sed diam voluptua. <strong>At vero eos et accusam</strong> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <a href='//www.sap.com'>tempor invidunt</a> ut labore et dolore magna aliquyam erat, sed diam voluptua. <em>At vero eos et accusam</em> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                    NumeroDeLikes = "15 mil",
                    NumeroDeComentarios = "10 mil",
                    TempoDecorrido = "21",
                    DataDePublicacao = DateTime.Now,
                    Carrossel =
                    [
                        new()
                        {
                            Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkig3DLAQHCA4nbf1uO0Qa0N8IxLrbNsDZQ&s",
                            Width = "",
                            MinWidth = "",
                            Height = "100%",
                            MinHeight = "100%",
                            AlignSelf = "Stretch"
                        },
                        new()
                        {
                            Image = "https://thumbs.dreamstime.com/b/desenho-do-vetor-plano-da-fita-de-banner-vermelha-curvada-em-branco-vermelho-curvo-isolado-216494194.jpg",
                            Width = "100%",
                            MinWidth = "100%",
                            Height = "",
                            MinHeight = "",
                            AlignSelf = "Auto"
                        }
                    ],
                },
                new()
                {
                    Id = "Post 1",
                    Autor = "George Washington",
                    Avatar = "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    Titulo = "Titulo exemplo",
                    Comunidade = "algo.com",
                    Texto = "<strong>Lorem ipsum dolor sit amet</strong>, <em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <a href='http://www.sap.com'>sed diam voluptua</a>. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <strong>tempor invidunt ut labore et dolore magna</strong> aliquyam erat, sed diam voluptua. <em>At vero eos et accusam et justo</em> duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiamnonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <u>sed diam nonumy eirmod tempor invidunt ut labore</u> et dolore magna aliquyam erat, sed diam voluptua. <strong>At vero eos et accusam</strong> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <a href='//www.sap.com'>tempor invidunt</a> ut labore et dolore magna aliquyam erat, sed diam voluptua. <em>At vero eos et accusam</em> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                    NumeroDeLikes = "15 mil",
                    NumeroDeComentarios = "10 mil",
                    TempoDecorrido = "21",
                    DataDePublicacao = DateTime.Now,
                    Carrossel =
                    [
                        new()
                        {
                            Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkig3DLAQHCA4nbf1uO0Qa0N8IxLrbNsDZQ&s",
                            Width = "",
                            MinWidth = "",
                            Height = "100%",
                            MinHeight = "100%",
                            AlignSelf = "Stretch"
                        },
                        new()
                        {
                            Image = "https://thumbs.dreamstime.com/b/desenho-do-vetor-plano-da-fita-de-banner-vermelha-curvada-em-branco-vermelho-curvo-isolado-216494194.jpg",
                            Width = "100%",
                            MinWidth = "100%",
                            Height = "",
                            MinHeight = "",
                            AlignSelf = "Auto"
                        }
                    ],
                },
                new()
                {
                    Id = "Post 1",
                    Autor = "George Washington",
                    Avatar = "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    Titulo = "Titulo exemplo",
                    Comunidade = "algo.com",
                    Texto = "<strong>Lorem ipsum dolor sit amet</strong>, <em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <a href='http://www.sap.com'>sed diam voluptua</a>. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <strong>tempor invidunt ut labore et dolore magna</strong> aliquyam erat, sed diam voluptua. <em>At vero eos et accusam et justo</em> duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiamnonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <u>sed diam nonumy eirmod tempor invidunt ut labore</u> et dolore magna aliquyam erat, sed diam voluptua. <strong>At vero eos et accusam</strong> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <a href='//www.sap.com'>tempor invidunt</a> ut labore et dolore magna aliquyam erat, sed diam voluptua. <em>At vero eos et accusam</em> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                    NumeroDeLikes = "15 mil",
                    NumeroDeComentarios = "10 mil",
                    TempoDecorrido = "21",
                    DataDePublicacao = DateTime.Now,
                    Carrossel =
                    [
                        new()
                        {
                            Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkig3DLAQHCA4nbf1uO0Qa0N8IxLrbNsDZQ&s",
                            Width = "",
                            MinWidth = "",
                            Height = "100%",
                            MinHeight = "100%",
                            AlignSelf = "Stretch"
                        },
                        new()
                        {
                            Image = "https://thumbs.dreamstime.com/b/desenho-do-vetor-plano-da-fita-de-banner-vermelha-curvada-em-branco-vermelho-curvo-isolado-216494194.jpg",
                            Width = "100%",
                            MinWidth = "100%",
                            Height = "",
                            MinHeight = "",
                            AlignSelf = "Auto"
                        }
                    ],
                },
                new()
                {
                    Id = "Post 1",
                    Autor = "George Washington",
                    Avatar = "https://styles.redditmedia.com/t5_446kys/styles/communityIcon_a7690j16och91.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=7f373823fa3432cce30bb7d0cca3741655e7dd68",
                    Titulo = "Titulo exemplo",
                    Comunidade = "algo.com",
                    Texto = "<strong>Lorem ipsum dolor sit amet</strong>, <em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <a href='http://www.sap.com'>sed diam voluptua</a>. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <strong>tempor invidunt ut labore et dolore magna</strong> aliquyam erat, sed diam voluptua. <em>At vero eos et accusam et justo</em> duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiamnonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <u>sed diam nonumy eirmod tempor invidunt ut labore</u> et dolore magna aliquyam erat, sed diam voluptua. <strong>At vero eos et accusam</strong> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <a href='//www.sap.com'>tempor invidunt</a> ut labore et dolore magna aliquyam erat, sed diam voluptua. <em>At vero eos et accusam</em> et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                    NumeroDeLikes = "15 mil",
                    NumeroDeComentarios = "10 mil",
                    TempoDecorrido = "21",
                    DataDePublicacao = DateTime.Now,
                    Carrossel =
                    [
                        new()
                        {
                            Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkig3DLAQHCA4nbf1uO0Qa0N8IxLrbNsDZQ&s",
                            Width = "",
                            MinWidth = "",
                            Height = "100%",
                            MinHeight = "100%",
                            AlignSelf = "Stretch"
                        },
                        new()
                        {
                            Image = "https://thumbs.dreamstime.com/b/desenho-do-vetor-plano-da-fita-de-banner-vermelha-curvada-em-branco-vermelho-curvo-isolado-216494194.jpg",
                            Width = "100%",
                            MinWidth = "100%",
                            Height = "",
                            MinHeight = "",
                            AlignSelf = "Auto"
                        }
                    ],
                },

                //new()
                //{
                //    Id = "",
                //    Autor = "",
                //    Avatar = "",
                //    Titulo = "",
                //    Comunidade = "",
                //    Texto = "",
                //    NumeroDeLikes = "",
                //    NumeroDeComentarios = "",
                //    TempoDecorrido = "",
                //    DataDePublicacao = "",
                //    Carrossel =
                //    [
                //        new()
                //        {
                //            Image = "",
                //            Width = "",
                //            MinWidth = "",
                //            Height = "",
                //            MinHeight = "",
                //            AlignSelf = ""
                //        }
                //    ],
                //}
            };
        }

        public void Remover(string id)
        {
            throw new NotImplementedException();
        }
    }
}
